// Copyright 2016-2019, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package ints

import (
	"os"
	"testing"

	"github.com/pulumi/pulumi-kubernetes/pkg/openapi"
	"github.com/pulumi/pulumi-kubernetes/tests"
	"github.com/pulumi/pulumi/pkg/resource"
	"github.com/pulumi/pulumi/pkg/resource/deploy/providers"
	"github.com/pulumi/pulumi/pkg/testing/integration"
	"github.com/stretchr/testify/assert"
)

func TestPod(t *testing.T) {
	kubectx := os.Getenv("KUBERNETES_CONTEXT")

	if kubectx == "" {
		t.Skipf("Skipping test due to missing KUBERNETES_CONTEXT variable")
	}

	integration.ProgramTest(t, &integration.ProgramTestOptions{
		Dir:          "step1",
		Dependencies: []string{"@pulumi/kubernetes"},
		Quick:        true,
		ExtraRuntimeValidation: func(t *testing.T, stackInfo integration.RuntimeValidationStackInfo) {
			assert.NotNil(t, stackInfo.Deployment)
			assert.Equal(t, 3, len(stackInfo.Deployment.Resources))

			tests.SortResourcesByURN(stackInfo)

			stackRes := stackInfo.Deployment.Resources[2]
			assert.Equal(t, resource.RootStackType, stackRes.URN.Type())

			provRes := stackInfo.Deployment.Resources[1]
			assert.True(t, providers.IsProviderType(provRes.URN.Type()))

			//
			// Assert first pod is successfully created.
			//

			pod := stackInfo.Deployment.Resources[0]

			// Default namespace.
			namespace, _ := openapi.Pluck(pod.Outputs, "metadata", "namespace")
			assert.Equal(t, namespace, "default")

			// Status is "Running"
			phase, _ := openapi.Pluck(pod.Outputs, "status", "phase")
			assert.Equal(t, "Running", phase)

			// Status "Ready" is "True".
			conditions, _ := openapi.Pluck(pod.Outputs, "status", "conditions")
			ready := conditions.([]interface{})[1].(map[string]interface{})
			readyType := ready["type"]
			assert.Equal(t, "Ready", readyType)
			readyStatus := ready["status"]
			assert.Equal(t, "True", readyStatus)

			// Container is called "nginx" and uses image "nginx:1.13-alpine".
			containerStatuses, _ := openapi.Pluck(pod.Outputs, "status", "containerStatuses")
			containerStatus := containerStatuses.([]interface{})[0].(map[string]interface{})
			containerName := containerStatus["name"]
			assert.Equal(t, "nginx", containerName)
			image := containerStatus["image"]
			assert.Equal(t, "nginx:1.13-alpine", image)
		},
		ExpectFailure: true, // The second Pod will fail to create because it has a duplicate namespace/name.
	})
}
