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

import * as k8s from "@pulumi/kubernetes";

const spec = {
  containers: [
    {name: "nginx", image: "nginx:1.13-alpine"},
  ],
};

//
// Create a simple Pod with no defined namespace/name. This will default to the "default" namespace.
// Note that the Pod will be auto-named to avoid collisions with parallel test runs.
//

const pod = new k8s.core.v1.Pod("pod-test", {
  spec: spec,
});

//
// Create a Pod with the same name with the namespace explicitly set to "default".
//

new k8s.core.v1.Pod("pod-test2", {
  metadata: {
    namespace: "default",
    name: pod.metadata.apply(p => p.name),
  },
  spec: spec,
});
