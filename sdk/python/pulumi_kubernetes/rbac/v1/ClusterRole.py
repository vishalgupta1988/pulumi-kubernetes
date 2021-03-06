import pulumi
import pulumi.runtime

from ... import tables

class ClusterRole(pulumi.CustomResource):
    """
    ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit
    by a RoleBinding or ClusterRoleBinding.
    """
    def __init__(self, __name__, __opts__=None, aggregation_rule=None, metadata=None, rules=None):
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['apiVersion'] = 'rbac.authorization.k8s.io/v1'
        __props__['kind'] = 'ClusterRole'
        if not rules:
            raise TypeError('Missing required property rules')
        __props__['rules'] = rules
        __props__['aggregationRule'] = aggregation_rule
        __props__['metadata'] = metadata

        super(ClusterRole, self).__init__(
            "kubernetes:rbac.authorization.k8s.io/v1:ClusterRole",
            __name__,
            __props__,
            __opts__)

    def translate_output_property(self, prop: str) -> str:
        return tables._CASING_FORWARD_TABLE.get(prop) or prop

    def translate_input_property(self, prop: str) -> str:
        return tables._CASING_BACKWARD_TABLE.get(prop) or prop
