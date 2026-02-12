import { diffRoutes } from "./dist/index.js";
const current = [
  {
    path: "/",
    readonly: true,
    hideInMenu: true,
    redirect: "/welcome",
  },
  {
    path: "/welcome",
    name: "欢迎页",
    readonly: true,
    hideInMenu: true,
    componentPath:
      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Welcome",
    moduleId: "/welcome",
  },
  {
    path: "/login",
    name: "登录",
    hideInMenu: true,
    readonly: true,
    navigates: {
      "/": "/",
    },
    componentPath:
      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Login",
    moduleId: "/login",
  },
  {
    path: "/dashboard",
    name: "仪表盘",
    icon: "DashboardOutlined",
    routes: [
      {
        path: "/dashboard",
        redirect: "/dashboard/overview",
      },
      {
        path: "/dashboard/overview",
        name: "概览",
        routes: [
          {
            path: "/dashboard/overview",
            redirect: "/dashboard/overview/list",
          },
          {
            path: "/dashboard/overview/list",
            name: "列表",
            hideInMenu: true,
            navigates: {
              "/embed/dashboard/overview/${record.id}/preview":
                "/embed/dashboard/overview/${record.id}/preview",
              "/dashboard/overview/${record.id}/preview":
                "/dashboard/overview/${record.id}/preview",
              "/embed/dashboard/overview/${record.id}/update":
                "/embed/dashboard/overview/${record.id}/update",
              "/dashboard/overview/${record.id}/update":
                "/dashboard/overview/${record.id}/update",
              "/embed/dashboard/overview/create":
                "/embed/dashboard/overview/create",
              "/dashboard/overview/create": "/dashboard/overview/create",
            },
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Dashboard/List",
            moduleId: "/dashboard/overview/list",
          },
          {
            path: "/dashboard/overview/create",
            name: "创建仪表板",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Dashboard/Create",
            moduleId: "/dashboard/overview/create",
          },
          {
            path: "/dashboard/overview/:dashboardId/preview",
            name: "预览仪表板",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Dashboard/Preview",
            moduleId: "/dashboard/overview/:dashboardId/preview",
          },
          {
            path: "/dashboard/overview/:dashboardId/update",
            name: "修改仪表板",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Dashboard/Update",
            moduleId: "/dashboard/overview/:dashboardId/update",
          },
        ],
      },
      {
        path: "/dashboard/widget",
        name: "图表",
        routes: [
          {
            path: "/dashboard/widget",
            redirect: "/dashboard/widget/list",
          },
          {
            path: "/dashboard/widget/list",
            name: "列表",
            hideInMenu: true,
            navigates: {
              "/dashboard/widget/${record.id}/copy":
                "/dashboard/widget/${record.id}/copy",
              "/sql-lab?id=${record?.id}": "/sql-lab?id=${record?.id}",
              "/dashboard/widget/${record.id}/update":
                "/dashboard/widget/${record.id}/update",
              "/dashboard/widget/create": "/dashboard/widget/create",
            },
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Widget/List",
            moduleId: "/dashboard/widget/list",
          },
          {
            path: "/dashboard/widget/create",
            name: "创建图表",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Widget/Editor",
            moduleId: "/dashboard/widget/create",
          },
          {
            path: "/dashboard/widget/:widgetId/update",
            name: "修改图表",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Widget/Editor",
            moduleId: "/dashboard/widget/:widgetId/update",
          },
          {
            path: "/dashboard/widget/:widgetId/copy",
            name: "复制图表",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Widget/Editor",
            moduleId: "/dashboard/widget/:widgetId/copy",
          },
        ],
      },
      {
        path: "/dashboard/datasource",
        name: "数据源",
        componentPath:
          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Datasource",
        moduleId: "/dashboard/datasource",
      },
    ],
  },
  {
    path: "/analysis",
    name: "专项分析",
    icon: "BarChartOutlined",
    routes: [
      {
        path: "/analysis",
        redirect: "/analysis/api-monitoring",
      },
      {
        path: "/analysis/api-monitoring",
        name: "API资产监测",
        routes: [
          {
            path: "/analysis/api-monitoring",
            redirect: "/analysis/api-monitoring/api-list",
          },
          {
            path: "/analysis/api-monitoring/overview",
            name: "概览",
            routes: [
              {
                path: "/analysis/api-monitoring/overview",
                redirect: "/analysis/api-monitoring/overview/api",
              },
              {
                path: "/analysis/api-monitoring/overview/api",
                name: "API概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Overview/Api",
                moduleId: "/analysis/api-monitoring/overview/api",
              },
              {
                path: "/analysis/api-monitoring/overview/active-assets",
                name: "活跃资产概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Overview/ActiveAssets",
                moduleId: "/analysis/api-monitoring/overview/active-assets",
              },
              {
                path: "/analysis/api-monitoring/overview/new-assets",
                name: "新增资产概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Overview/NewAssets",
                moduleId: "/analysis/api-monitoring/overview/new-assets",
              },
              {
                path: "/analysis/api-monitoring/overview/unknown-assets",
                name: "未知API概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Overview/UnknownAssets",
                moduleId: "/analysis/api-monitoring/overview/unknown-assets",
              },
              {
                path: "/analysis/api-monitoring/overview/zombie-assets",
                name: "僵尸资产概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Overview/ZombieAssets",
                moduleId: "/analysis/api-monitoring/overview/zombie-assets",
              },
              {
                path: "/analysis/api-monitoring/overview/auth-assets",
                name: "认证资产概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Overview/AuthAssets",
                moduleId: "/analysis/api-monitoring/overview/auth-assets",
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
          {
            path: "/analysis/api-monitoring/api-list",
            name: "API列表",
            routes: [
              {
                path: "/analysis/api-monitoring/api-list",
                redirect: "/analysis/api-monitoring/api-list/common",
              },
              {
                path: "/analysis/api-monitoring/api-list/common",
                name: "普通API",
                routes: [
                  {
                    path: "/analysis/api-monitoring/api-list/common",
                    redirect: "/analysis/api-monitoring/api-list/common/list",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/common/list",
                    name: "列表",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/CommonApi",
                    moduleId: "/analysis/api-monitoring/api-list/common/list",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/common/create",
                    name: "新建",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/CommonApi/components/Create",
                    moduleId: "/analysis/api-monitoring/api-list/common/create",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/common/:id/update",
                    name: "编辑",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/CommonApi/components/Update",
                    moduleId:
                      "/analysis/api-monitoring/api-list/common/:id/update",
                  },
                ],
              },
              {
                path: "/analysis/api-monitoring/api-list/filter",
                name: "过滤API",
                routes: [
                  {
                    path: "/analysis/api-monitoring/api-list/filter",
                    redirect: "/analysis/api-monitoring/api-list/filter/list",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/filter/list",
                    name: "列表",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/FilterApi",
                    moduleId: "/analysis/api-monitoring/api-list/filter/list",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/filter/create",
                    name: "新建",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/FilterApi/components/Create",
                    moduleId: "/analysis/api-monitoring/api-list/filter/create",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/filter/:id/update",
                    name: "编辑",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/FilterApi/components/Update",
                    moduleId:
                      "/analysis/api-monitoring/api-list/filter/:id/update",
                  },
                ],
              },
              {
                path: "/analysis/api-monitoring/api-list/aggregate",
                name: "聚合API",
                routes: [
                  {
                    path: "/analysis/api-monitoring/api-list/aggregate",
                    redirect:
                      "/analysis/api-monitoring/api-list/aggregate/list",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/aggregate/list",
                    name: "列表",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/AggregateApi",
                    moduleId:
                      "/analysis/api-monitoring/api-list/aggregate/list",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/aggregate/create",
                    name: "新建",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/AggregateApi/components/Create",
                    moduleId:
                      "/analysis/api-monitoring/api-list/aggregate/create",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/aggregate/:id/update",
                    name: "编辑",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/AggregateApi/components/Update",
                    moduleId:
                      "/analysis/api-monitoring/api-list/aggregate/:id/update",
                  },
                ],
              },
              {
                path: "/analysis/api-monitoring/api-list/unknown",
                name: "未知API",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/UnknownApi",
                moduleId: "/analysis/api-monitoring/api-list/unknown",
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
          {
            path: "/analysis/api-monitoring/rules",
            name: "API规则",
            routes: [
              {
                path: "/analysis/api-monitoring/rules",
                redirect: "/analysis/api-monitoring/rules/common",
              },
              {
                path: "/analysis/api-monitoring/rules/common",
                name: "普通规则",
                routes: [
                  {
                    path: "/analysis/api-monitoring/rules/common",
                    redirect: "/analysis/api-monitoring/rules/common/list",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/common/list",
                    name: "列表",
                    hideInMenu: true,
                    navigates: {
                      "/analysis/api-monitoring/rules/common/${record.id}/update":
                        "/analysis/api-monitoring/rules/common/${record.id}/update",
                      "/analysis/api-monitoring/rules/common/create":
                        "/analysis/api-monitoring/rules/common/create",
                    },
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/CommonRule",
                    moduleId: "/analysis/api-monitoring/rules/common/list",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/common/create",
                    name: "新建",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/CommonRule/components/Create",
                    moduleId: "/analysis/api-monitoring/rules/common/create",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/common/:id/update",
                    name: "编辑",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/CommonRule/components/Update",
                    moduleId:
                      "/analysis/api-monitoring/rules/common/:id/update",
                  },
                ],
              },
              {
                path: "/analysis/api-monitoring/rules/filter",
                name: "过滤规则",
                routes: [
                  {
                    path: "/analysis/api-monitoring/rules/filter",
                    redirect: "/analysis/api-monitoring/rules/filter/list",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/filter/list",
                    name: "列表",
                    hideInMenu: true,
                    navigates: {
                      "/analysis/api-monitoring/rules/filter/${record.id}/update":
                        "/analysis/api-monitoring/rules/filter/${record.id}/update",
                      "/analysis/api-monitoring/rules/filter/create":
                        "/analysis/api-monitoring/rules/filter/create",
                    },
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/FilterRule",
                    moduleId: "/analysis/api-monitoring/rules/filter/list",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/filter/create",
                    name: "新建",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/FilterRule/components/Create",
                    moduleId: "/analysis/api-monitoring/rules/filter/create",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/filter/:id/update",
                    name: "编辑",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/FilterRule/components/Update",
                    moduleId:
                      "/analysis/api-monitoring/rules/filter/:id/update",
                  },
                ],
              },
              {
                path: "/analysis/api-monitoring/rules/agg",
                name: "聚合规则",
                routes: [
                  {
                    path: "/analysis/api-monitoring/rules/agg",
                    redirect: "/analysis/api-monitoring/rules/agg/list",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/agg/list",
                    name: "列表",
                    hideInMenu: true,
                    navigates: {
                      "/analysis/api-monitoring/rules/agg/${record.id}/update":
                        "/analysis/api-monitoring/rules/agg/${record.id}/update",
                      "/analysis/api-monitoring/rules/agg/create":
                        "/analysis/api-monitoring/rules/agg/create",
                    },
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/AggRule",
                    moduleId: "/analysis/api-monitoring/rules/agg/list",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/agg/create",
                    name: "新建",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/AggRule/components/Create",
                    moduleId: "/analysis/api-monitoring/rules/agg/create",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/agg/:id/update",
                    name: "编辑",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/AggRule/components/Update",
                    moduleId: "/analysis/api-monitoring/rules/agg/:id/update",
                  },
                ],
              },
              {
                path: "/analysis/api-monitoring/rules/reload",
                name: "规则匹配",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/Reload",
                moduleId: "/analysis/api-monitoring/rules/reload",
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
          {
            path: "/analysis/api-monitoring/image",
            name: "API画像",
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiImage",
            moduleId: "/analysis/api-monitoring/image",
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
      {
        path: "/analysis/baseline",
        name: "基线监测",
        routes: [
          {
            path: "/analysis/baseline",
            redirect: "/analysis/baseline/body-size/abnormal",
          },
          {
            path: "/analysis/baseline/body-size",
            name: "长度监测",
            routes: [
              {
                path: "/analysis/baseline/body-size",
                redirect: "/analysis/baseline/body-size/abnormal",
              },
              {
                path: "/analysis/baseline/body-size/abnormal",
                name: "异常详情",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/BodySizeMonitoring/Abnormal",
                moduleId: "/analysis/baseline/body-size/abnormal",
              },
              {
                path: "/analysis/baseline/body-size/baseline-detail",
                name: "基线详情",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/BodySizeMonitoring/Baseline/BasicModel",
                moduleId: "/analysis/baseline/body-size/baseline-detail",
              },
              {
                path: "/analysis/baseline/body-size/settings",
                name: "基线设置",
                routes: [
                  {
                    path: "/analysis/baseline/body-size/settings",
                    redirect: "/analysis/baseline/body-size/settings/basic",
                  },
                  {
                    path: "/analysis/baseline/body-size/settings/basic",
                    name: "基线",
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/BodySizeMonitoring/BasicModelSettings",
                    moduleId: "/analysis/baseline/body-size/settings/basic",
                  },
                  {
                    path: "/analysis/baseline/body-size/settings/algorithm",
                    name: "异常告警配置",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/AccessMonitoring/settings/AlertAlgorithm",
                    moduleId: "/analysis/baseline/body-size/settings/algorithm",
                  },
                ],
                moduleId: "PAGE_LAYOUT_KEY",
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
          {
            path: "/analysis/baseline/access",
            name: "总访问频次监测",
            routes: [
              {
                path: "/analysis/baseline/access",
                redirect: "/analysis/baseline/access/abnormal",
              },
              {
                path: "/analysis/baseline/access/abnormal",
                name: "异常详情",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/AccessMonitoring/Abnormal",
                moduleId: "/analysis/baseline/access/abnormal",
              },
              {
                path: "/analysis/baseline/access/baseline-detail",
                name: "基线详情",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/AccessMonitoring/Baseline",
                moduleId: "/analysis/baseline/access/baseline-detail",
              },
              {
                path: "/analysis/baseline/access/settings",
                name: "基线配置",
                routes: [
                  {
                    path: "/analysis/baseline/access/settings",
                    redirect: "/analysis/baseline/access/settings/baseline",
                  },
                  {
                    path: "/analysis/baseline/access/settings/baseline",
                    name: "基线",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/AccessMonitoring/settings/Baseline",
                    moduleId: "/analysis/baseline/access/settings/baseline",
                  },
                  {
                    path: "/analysis/baseline/access/settings/algorithm",
                    name: "异常告警配置",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/AccessMonitoring/settings/AlertAlgorithm",
                    moduleId: "/analysis/baseline/access/settings/algorithm",
                  },
                ],
                moduleId: "PAGE_LAYOUT_KEY",
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
          {
            path: "/analysis/baseline/ip-access",
            name: "IP访问频次监测",
            routes: [
              {
                path: "/analysis/baseline/ip-access",
                redirect: "/analysis/baseline/ip-access/abnormal",
              },
              {
                path: "/analysis/baseline/ip-access/abnormal",
                name: "异常详情",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/IPAccessMonitoring/Abnormal",
                moduleId: "/analysis/baseline/ip-access/abnormal",
              },
              {
                path: "/analysis/baseline/ip-access/baseline-detail",
                name: "基线详情",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/IPAccessMonitoring/Baseline",
                moduleId: "/analysis/baseline/ip-access/baseline-detail",
              },
              {
                path: "/analysis/baseline/ip-access/settings",
                name: "基线配置",
                routes: [
                  {
                    path: "/analysis/baseline/ip-access/settings",
                    redirect: "/analysis/baseline/ip-access/settings/baseline",
                  },
                  {
                    path: "/analysis/baseline/ip-access/settings/baseline",
                    name: "基线",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/IPAccessMonitoring/BaselineForm",
                    moduleId: "/analysis/baseline/ip-access/settings/baseline",
                  },
                  {
                    path: "/analysis/baseline/ip-access/settings/algorithm",
                    name: "异常告警配置",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/AccessMonitoring/settings/AlertAlgorithm",
                    moduleId: "/analysis/baseline/ip-access/settings/algorithm",
                  },
                ],
                moduleId: "PAGE_LAYOUT_KEY",
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
    ],
  },
  {
    path: "/configuration/trace",
    name: "数据源分析",
    icon: "SearchOutlined",
    routes: [
      {
        path: "/configuration/trace",
        redirect: "/configuration/trace/http",
      },
      {
        path: "/configuration/trace/http",
        name: "HTTP详单",
        componentPath:
          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/trace/Metadata/HTTP",
        moduleId: "/configuration/trace/http",
      },
      {
        path: "/configuration/trace/All",
        name: "所有详单",
        componentPath:
          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/trace/Metadata/All",
        hideInMenu: true,
        moduleId: "/configuration/trace/All",
      },
    ],
  },
  {
    path: "/audit",
    name: "审计信息",
    icon: "AuditOutlined",
    routes: [
      {
        path: "/audit",
        redirect: "/audit/logs",
      },
      {
        path: "/audit/logs",
        name: "日志告警",
        componentPath:
          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/audit/SysLogs",
        moduleId: "/audit/logs",
      },
    ],
  },
  {
    path: "/configuration",
    name: "功能配置",
    icon: "ToolOutlined",
    routes: [
      {
        path: "/configuration",
        redirect: "/configuration/external",
      },
      {
        path: "/configuration/objects",
        name: "对象",
        routes: [
          {
            path: "/configuration/objects",
            redirect: "/configuration/objects/replace-name",
          },
          {
            path: "/configuration/objects/replace-name",
            name: "别名",
            routes: [
              {
                path: "/configuration/objects/replace-name",
                redirect: "/configuration/objects/replace-name/list",
              },
              {
                path: "/configuration/objects/replace-name/list",
                name: "列表",
                hideInMenu: true,
                navigates: {
                  "/configuration/objects/replace-name/${record.id}/update":
                    "/configuration/objects/replace-name/${record.id}/update",
                  "/configuration/objects/replace-name/create":
                    "/configuration/objects/replace-name/create",
                },
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/ReplaceName/components/ConfigName",
                moduleId: "/configuration/objects/replace-name/list",
              },
              {
                path: "/configuration/objects/replace-name/create",
                name: "新建",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/ReplaceName/components/ConfigName/Create",
                moduleId: "/configuration/objects/replace-name/create",
              },
              {
                path: "/configuration/objects/replace-name/:id/update",
                name: "编辑",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/ReplaceName/components/ConfigName/Update",
                moduleId: "/configuration/objects/replace-name/:id/update",
              },
            ],
          },
          {
            path: "/configuration/objects/internal-ip-group",
            name: "内网IP地址组",
            routes: [
              {
                path: "/configuration/objects/internal-ip-group",
                redirect: "/configuration/objects/internal-ip-group/list",
              },
              {
                path: "/configuration/objects/internal-ip-group/list",
                name: "列表",
                hideInMenu: true,
                navigates: {
                  "/configuration/objects/internal-ip-group/${record.id}/update":
                    "/configuration/objects/internal-ip-group/${record.id}/update",
                  "/configuration/objects/internal-ip-group/create":
                    "/configuration/objects/internal-ip-group/create",
                },
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/InternalIpGroup",
                moduleId: "/configuration/objects/internal-ip-group/list",
              },
              {
                path: "/configuration/objects/internal-ip-group/create",
                name: "新建",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/InternalIpGroup/Create",
                moduleId: "/configuration/objects/internal-ip-group/create",
              },
              {
                path: "/configuration/objects/internal-ip-group/:id/update",
                name: "编辑",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/InternalIpGroup/Update",
                moduleId: "/configuration/objects/internal-ip-group/:id/update",
              },
            ],
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
      {
        path: "/configuration/analysis",
        name: "专项分析",
        routes: [
          {
            path: "/configuration/analysis",
            redirect: "/configuration/analysis/custom-api-auth",
          },
          {
            path: "/configuration/analysis/custom-api-auth",
            name: "API 认证方式",
            routes: [
              {
                path: "/configuration/analysis/custom-api-auth",
                redirect: "/configuration/analysis/custom-api-auth/list",
              },
              {
                path: "/configuration/analysis/custom-api-auth/list",
                name: "列表",
                hideInMenu: true,
                navigates: {
                  "/configuration/analysis/custom-api-auth/${record.id}/update":
                    "/configuration/analysis/custom-api-auth/${record.id}/update",
                  "/configuration/analysis/custom-api-auth/create":
                    "/configuration/analysis/custom-api-auth/create",
                },
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/CustomApiAuth",
                moduleId: "/configuration/analysis/custom-api-auth/list",
              },
              {
                path: "/configuration/analysis/custom-api-auth/create",
                name: "新建",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/CustomApiAuth/components/Create",
                moduleId: "/configuration/analysis/custom-api-auth/create",
              },
              {
                path: "/configuration/analysis/custom-api-auth/:id/update",
                name: "编辑",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/CustomApiAuth/components/Update",
                moduleId: "/configuration/analysis/custom-api-auth/:id/update",
              },
            ],
          },
          {
            path: "/configuration/analysis/app-entrance",
            name: "应用程序入口",
            routes: [
              {
                path: "/configuration/analysis/app-entrance",
                redirect: "/configuration/analysis/app-entrance/list",
              },
              {
                path: "/configuration/analysis/app-entrance/list",
                name: "列表",
                hideInMenu: true,
                navigates: {
                  "/configuration/analysis/app-entrance/${record.id}/update":
                    "/configuration/analysis/app-entrance/${record.id}/update",
                  "/configuration/analysis/app-entrance/create":
                    "/configuration/analysis/app-entrance/create",
                },
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/AppEntrance",
                moduleId: "/configuration/analysis/app-entrance/list",
              },
              {
                path: "/configuration/analysis/app-entrance/create",
                name: "新建",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/AppEntrance/components/Create",
                moduleId: "/configuration/analysis/app-entrance/create",
              },
              {
                path: "/configuration/analysis/app-entrance/:id/update",
                name: "编辑",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/AppEntrance/components/Update",
                moduleId: "/configuration/analysis/app-entrance/:id/update",
              },
            ],
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
      {
        path: "/configuration/external",
        name: "外部系统",
        routes: [
          {
            path: "/configuration/external",
            redirect: "/configuration/external/third-party",
          },
          {
            path: "/configuration/external/third-party",
            name: "第三方对接",
            routes: [
              {
                path: "/configuration/external/third-party",
                redirect: "/configuration/external/third-party/server",
              },
              {
                path: "/configuration/external/third-party/server",
                name: "外发服务器",
                routes: [
                  {
                    path: "/configuration/external/third-party/server",
                    redirect:
                      "/configuration/external/third-party/server/syslog",
                  },
                  {
                    path: "/configuration/external/third-party/server/syslog",
                    name: "SYSLOG 服务器",
                    routes: [
                      {
                        path: "/configuration/external/third-party/server/syslog",
                        redirect:
                          "/configuration/external/third-party/server/syslog/list",
                      },
                      {
                        path: "/configuration/external/third-party/server/syslog/list",
                        name: "列表",
                        navigates: {
                          "/configuration/external/third-party/server/syslog/create":
                            "/configuration/external/third-party/server/syslog/create",
                        },
                        componentPath:
                          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/Server/Syslog",
                        moduleId:
                          "/configuration/external/third-party/server/syslog/list",
                      },
                      {
                        path: "/configuration/external/third-party/server/syslog/create",
                        name: "新建",
                        componentPath:
                          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/Server/Syslog/components/Create",
                        moduleId:
                          "/configuration/external/third-party/server/syslog/create",
                      },
                      {
                        path: "/configuration/external/third-party/server/syslog/:id/update",
                        name: "编辑",
                        componentPath:
                          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/Server/Syslog/components/Update",
                        moduleId:
                          "/configuration/external/third-party/server/syslog/:id/update",
                      },
                    ],
                  },
                ],
                moduleId: "PAGE_LAYOUT_KEY",
              },
              {
                path: "/configuration/external/third-party/sendup-rules",
                name: "外发规则",
                routes: [
                  {
                    path: "/configuration/external/third-party/sendup-rules",
                    redirect:
                      "/configuration/external/third-party/sendup-rules/list",
                  },
                  {
                    path: "/configuration/external/third-party/sendup-rules/list",
                    name: "列表",
                    navigates: {
                      "/configuration/external/third-party/sendup-rules/${record?.id}/update":
                        "/configuration/external/third-party/sendup-rules/${record?.id}/update",
                      "/configuration/external/third-party/sendup-rules/create":
                        "/configuration/external/third-party/sendup-rules/create",
                    },
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/SendRules",
                    moduleId:
                      "/configuration/external/third-party/sendup-rules/list",
                  },
                  {
                    path: "/configuration/external/third-party/sendup-rules/create",
                    name: "新建",
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/SendRules/components/Create",
                    moduleId:
                      "/configuration/external/third-party/sendup-rules/create",
                  },
                  {
                    path: "/configuration/external/third-party/sendup-rules/:id/update",
                    name: "编辑",
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/SendRules/components/Update",
                    moduleId:
                      "/configuration/external/third-party/sendup-rules/:id/update",
                  },
                ],
              },
              {
                path: "/configuration/external/third-party/send-policy",
                name: "外发策略",
                routes: [
                  {
                    path: "/configuration/external/third-party/send-policy",
                    redirect:
                      "/configuration/external/third-party/send-policy/list",
                  },
                  {
                    path: "/configuration/external/third-party/send-policy/list",
                    name: "列表",
                    navigates: {
                      "/configuration/external/third-party/send-policy/${record?.id}/update":
                        "/configuration/external/third-party/send-policy/${record?.id}/update",
                      "/configuration/external/third-party/send-policy/create":
                        "/configuration/external/third-party/send-policy/create",
                    },
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/SendPolicy",
                    moduleId:
                      "/configuration/external/third-party/send-policy/list",
                  },
                  {
                    path: "/configuration/external/third-party/send-policy/create",
                    name: "新建",
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/SendPolicy/components/Create",
                    moduleId:
                      "/configuration/external/third-party/send-policy/create",
                  },
                  {
                    path: "/configuration/external/third-party/send-policy/:id/update",
                    name: "编辑",
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/SendPolicy/components/Update",
                    moduleId:
                      "/configuration/external/third-party/send-policy/:id/update",
                  },
                ],
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
          {
            path: "/configuration/external/rest-api",
            name: "REST API",
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/RestApi",
            moduleId: "/configuration/external/rest-api",
          },
          {
            path: "/configuration/external/mcp-server",
            name: "MCP Server",
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/McpServer",
            moduleId: "/configuration/external/mcp-server",
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
    ],
  },
  {
    path: "/system-monitor",
    name: "系统监控",
    icon: "FundViewOutlined",
    routes: [
      {
        path: "/system-monitor",
        redirect: "/system-monitor/service",
      },
      {
        path: "/system-monitor/service",
        name: "服务监控",
        routes: [
          {
            path: "/system-monitor/service",
            redirect: "/system-monitor/service/dashboard",
          },
          {
            path: "/system-monitor/service/dashboard",
            name: "服务监控",
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/system/Monitor/Service/Dashboard",
            moduleId: "/system-monitor/service/dashboard",
          },
          {
            path: "/system-monitor/service/k8s",
            name: "K8S监控",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/k8s/Layout",
            routes: [
              {
                path: "/system-monitor/service/k8s",
                redirect: "/system-monitor/service/k8s/overview",
              },
              {
                path: "/system-monitor/service/k8s/overview",
                name: "概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/k8s/Overview",
                moduleId: "/system-monitor/service/k8s/overview",
              },
              {
                path: "/system-monitor/service/k8s/node",
                name: "节点状态",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/k8s/Node",
                moduleId: "/system-monitor/service/k8s/node",
              },
              {
                path: "/system-monitor/service/k8s/pod",
                name: "pod监控",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/k8s/Pod",
                moduleId: "/system-monitor/service/k8s/pod",
              },
              {
                path: "/system-monitor/service/k8s/pods/:podName/shell",
                name: "pod Shell",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/k8s/components/PodShell",
                moduleId: "/system-monitor/service/k8s/pods/:podName/shell",
              },
              {
                path: "/system-monitor/service/k8s/resource",
                name: "资源使用",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/k8s/Resource",
                moduleId: "/system-monitor/service/k8s/resource",
              },
            ],
            moduleId: "/system-monitor/service/k8s",
          },
          {
            path: "/system-monitor/service/flink",
            name: "Flink监控",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Flink",
            moduleId: "/system-monitor/service/flink",
          },
          {
            path: "/system-monitor/service/kafka",
            name: "kafka监控",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/system/Monitor/Service/Detail/kafka",
            moduleId: "/system-monitor/service/kafka",
          },
          {
            path: "/system-monitor/service/dolphinScheduler",
            name: "DolphinScheduler监控",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/system/Monitor/Service/Detail/dolphin",
            moduleId: "/system-monitor/service/dolphinScheduler",
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
      {
        path: "/system-monitor/dolphinscheduler",
        name: "调度任务",
        componentPath:
          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/DolphinScheduler/Monitor",
        moduleId: "/system-monitor/dolphinscheduler",
      },
    ],
  },
  {
    path: "/system",
    name: "系统管理",
    icon: "SettingOutlined",
    routes: [
      {
        path: "/system",
        redirect: "/system/setting",
      },
      {
        path: "/system/setting",
        name: "系统配置",
        routes: [
          {
            path: "/system/setting",
            redirect: "/system/setting/upgrade",
          },
          {
            path: "/system/setting/upgrade",
            name: "系统升级",
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/system/Upgrade",
            moduleId: "/system/setting/upgrade",
          },
          {
            path: "/system/setting/theme",
            name: "主题配置",
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/system/Theme",
            moduleId: "/system/setting/theme",
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
      {
        path: "/system/user",
        name: "用户管理",
        routes: [
          {
            path: "/system/user",
            redirect: "/system/user/list",
          },
          {
            path: "/system/user/list",
            name: "列表",
            hideInMenu: true,
            navigates: {
              "/system/user/${record.id}/update":
                "/system/user/${record.id}/update",
              "/system/user/create": "/system/user/create",
            },
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/UserManage",
            moduleId: "/system/user/list",
          },
          {
            path: "/system/user/create",
            name: "创建",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/UserManage/components/Create",
            moduleId: "/system/user/create",
          },
          {
            path: "/system/user/:id/update",
            name: "编辑",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/UserManage/components/Update",
            moduleId: "/system/user/:id/update",
          },
        ],
      },
    ],
  },
];

const newRoutes = [
  {
    path: "/",
    readonly: true,
    hideInMenu: true,
    redirect: "/welcome",
  },
  {
    path: "/welcome",
    name: "欢迎页",
    readonly: true,
    hideInMenu: true,
    componentPath:
      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Welcome",
    moduleId: "/welcome",
  },
  {
    path: "/login",
    name: "登录",
    hideInMenu: true,
    readonly: true,
    navigates: {
      "/": "/",
    },
    componentPath:
      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Login",
    moduleId: "/login",
  },
  {
    path: "/dashboard",
    name: "仪表盘",
    icon: "DashboardOutlined",
    routes: [
      {
        path: "/dashboard",
        redirect: "/dashboard/overview",
      },
      {
        path: "/dashboard/overview",
        name: "概览",
        routes: [
          {
            path: "/dashboard/overview",
            redirect: "/dashboard/overview/list",
          },
          {
            path: "/dashboard/overview/list",
            name: "列表",
            hideInMenu: true,
            navigates: {
              "/embed/dashboard/overview/${record.id}/preview":
                "/embed/dashboard/overview/${record.id}/preview",
              "/dashboard/overview/${record.id}/preview":
                "/dashboard/overview/${record.id}/preview",
              "/embed/dashboard/overview/${record.id}/update":
                "/embed/dashboard/overview/${record.id}/update",
              "/dashboard/overview/${record.id}/update":
                "/dashboard/overview/${record.id}/update",
              "/embed/dashboard/overview/create":
                "/embed/dashboard/overview/create",
              "/dashboard/overview/create": "/dashboard/overview/create",
            },
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Dashboard/List",
            moduleId: "/dashboard/overview/list",
          },
          {
            path: "/dashboard/overview/create",
            name: "创建仪表板",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Dashboard/Create",
            moduleId: "/dashboard/overview/create",
          },
          {
            path: "/dashboard/overview/:dashboardId/preview",
            name: "预览仪表板",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Dashboard/Preview",
            moduleId: "/dashboard/overview/:dashboardId/preview",
          },
          {
            path: "/dashboard/overview/:dashboardId/update",
            name: "修改仪表板",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Dashboard/Update",
            moduleId: "/dashboard/overview/:dashboardId/update",
          },
        ],
      },
      {
        path: "/dashboard/widget",
        name: "图表",
        routes: [
          {
            path: "/dashboard/widget",
            redirect: "/dashboard/widget/list",
          },
          {
            path: "/dashboard/widget/list",
            name: "列表",
            hideInMenu: true,
            navigates: {
              "/dashboard/widget/${record.id}/copy":
                "/dashboard/widget/${record.id}/copy",
              "/sql-lab?id=${record?.id}": "/sql-lab?id=${record?.id}",
              "/dashboard/widget/${record.id}/update":
                "/dashboard/widget/${record.id}/update",
              "/dashboard/widget/create": "/dashboard/widget/create",
            },
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Widget/List",
            moduleId: "/dashboard/widget/list",
          },
          {
            path: "/dashboard/widget/create",
            name: "创建图表",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Widget/Editor",
            moduleId: "/dashboard/widget/create",
          },
          {
            path: "/dashboard/widget/:widgetId/update",
            name: "修改图表",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Widget/Editor",
            moduleId: "/dashboard/widget/:widgetId/update",
          },
          {
            path: "/dashboard/widget/:widgetId/copy",
            name: "复制图表",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Widget/Editor",
            moduleId: "/dashboard/widget/:widgetId/copy",
          },
        ],
      },
      {
        path: "/dashboard/datasource",
        name: "数据源",
        componentPath:
          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Datasource",
        moduleId: "/dashboard/datasource",
      },
    ],
  },
  {
    path: "/analysis",
    name: "专项分析",
    icon: "BarChartOutlined",
    routes: [
      {
        path: "/analysis",
        redirect: "/analysis/api-monitoring",
      },
      {
        path: "/analysis/api-monitoring",
        name: "API资产监测",
        routes: [
          {
            path: "/analysis/api-monitoring",
            redirect: "/analysis/api-monitoring/api-list",
          },
          {
            path: "/analysis/api-monitoring/overview",
            name: "概览",
            routes: [
              {
                path: "/analysis/api-monitoring/overview",
                redirect: "/analysis/api-monitoring/overview/api",
              },
              {
                path: "/analysis/api-monitoring/overview/api",
                name: "API概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Overview/Api",
                moduleId: "/analysis/api-monitoring/overview/api",
              },
              {
                path: "/analysis/api-monitoring/overview/active-assets",
                name: "活跃资产概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Overview/ActiveAssets",
                moduleId: "/analysis/api-monitoring/overview/active-assets",
              },
              {
                path: "/analysis/api-monitoring/overview/new-assets",
                name: "新增资产概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Overview/NewAssets",
                moduleId: "/analysis/api-monitoring/overview/new-assets",
              },
              {
                path: "/analysis/api-monitoring/overview/unknown-assets",
                name: "未知API概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Overview/UnknownAssets",
                moduleId: "/analysis/api-monitoring/overview/unknown-assets",
              },
              {
                path: "/analysis/api-monitoring/overview/zombie-assets",
                name: "僵尸资产概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Overview/ZombieAssets",
                moduleId: "/analysis/api-monitoring/overview/zombie-assets",
              },
              {
                path: "/analysis/api-monitoring/overview/auth-assets",
                name: "认证资产概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Overview/AuthAssets",
                moduleId: "/analysis/api-monitoring/overview/auth-assets",
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
          {
            path: "/analysis/api-monitoring/api-list",
            name: "API列表",
            routes: [
              {
                path: "/analysis/api-monitoring/api-list",
                redirect: "/analysis/api-monitoring/api-list/common",
              },
              {
                path: "/analysis/api-monitoring/api-list/common",
                name: "普通API",
                routes: [
                  {
                    path: "/analysis/api-monitoring/api-list/common",
                    redirect: "/analysis/api-monitoring/api-list/common/list",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/common/list",
                    name: "列表",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/CommonApi",
                    moduleId: "/analysis/api-monitoring/api-list/common/list",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/common/create",
                    name: "新建",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/CommonApi/components/Create",
                    moduleId: "/analysis/api-monitoring/api-list/common/create",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/common/:id/update",
                    name: "编辑",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/CommonApi/components/Update",
                    moduleId:
                      "/analysis/api-monitoring/api-list/common/:id/update",
                  },
                ],
              },
              {
                path: "/analysis/api-monitoring/api-list/filter",
                name: "过滤API",
                routes: [
                  {
                    path: "/analysis/api-monitoring/api-list/filter",
                    redirect: "/analysis/api-monitoring/api-list/filter/list",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/filter/list",
                    name: "列表",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/FilterApi",
                    moduleId: "/analysis/api-monitoring/api-list/filter/list",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/filter/create",
                    name: "新建",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/FilterApi/components/Create",
                    moduleId: "/analysis/api-monitoring/api-list/filter/create",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/filter/:id/update",
                    name: "编辑",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/FilterApi/components/Update",
                    moduleId:
                      "/analysis/api-monitoring/api-list/filter/:id/update",
                  },
                ],
              },
              {
                path: "/analysis/api-monitoring/api-list/aggregate",
                name: "聚合API",
                routes: [
                  {
                    path: "/analysis/api-monitoring/api-list/aggregate",
                    redirect:
                      "/analysis/api-monitoring/api-list/aggregate/list",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/aggregate/list",
                    name: "列表",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/AggregateApi",
                    moduleId:
                      "/analysis/api-monitoring/api-list/aggregate/list",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/aggregate/create",
                    name: "新建",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/AggregateApi/components/Create",
                    moduleId:
                      "/analysis/api-monitoring/api-list/aggregate/create",
                  },
                  {
                    path: "/analysis/api-monitoring/api-list/aggregate/:id/update",
                    name: "编辑",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/AggregateApi/components/Update",
                    moduleId:
                      "/analysis/api-monitoring/api-list/aggregate/:id/update",
                  },
                ],
              },
              {
                path: "/analysis/api-monitoring/api-list/unknown",
                name: "未知API",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/List/UnknownApi",
                moduleId: "/analysis/api-monitoring/api-list/unknown",
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
          {
            path: "/analysis/api-monitoring/rules",
            name: "API规则",
            routes: [
              {
                path: "/analysis/api-monitoring/rules",
                redirect: "/analysis/api-monitoring/rules/common",
              },
              {
                path: "/analysis/api-monitoring/rules/common",
                name: "普通规则",
                routes: [
                  {
                    path: "/analysis/api-monitoring/rules/common",
                    redirect: "/analysis/api-monitoring/rules/common/list",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/common/list",
                    name: "列表",
                    hideInMenu: true,
                    navigates: {
                      "/analysis/api-monitoring/rules/common/${record.id}/update":
                        "/analysis/api-monitoring/rules/common/${record.id}/update",
                      "/analysis/api-monitoring/rules/common/create":
                        "/analysis/api-monitoring/rules/common/create",
                    },
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/CommonRule",
                    moduleId: "/analysis/api-monitoring/rules/common/list",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/common/create",
                    name: "新建",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/CommonRule/components/Create",
                    moduleId: "/analysis/api-monitoring/rules/common/create",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/common/:id/update",
                    name: "编辑",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/CommonRule/components/Update",
                    moduleId:
                      "/analysis/api-monitoring/rules/common/:id/update",
                  },
                ],
              },
              {
                path: "/analysis/api-monitoring/rules/filter",
                name: "过滤规则",
                routes: [
                  {
                    path: "/analysis/api-monitoring/rules/filter",
                    redirect: "/analysis/api-monitoring/rules/filter/list",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/filter/list",
                    name: "列表",
                    hideInMenu: true,
                    navigates: {
                      "/analysis/api-monitoring/rules/filter/${record.id}/update":
                        "/analysis/api-monitoring/rules/filter/${record.id}/update",
                      "/analysis/api-monitoring/rules/filter/create":
                        "/analysis/api-monitoring/rules/filter/create",
                    },
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/FilterRule",
                    moduleId: "/analysis/api-monitoring/rules/filter/list",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/filter/create",
                    name: "新建",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/FilterRule/components/Create",
                    moduleId: "/analysis/api-monitoring/rules/filter/create",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/filter/:id/update",
                    name: "编辑",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/FilterRule/components/Update",
                    moduleId:
                      "/analysis/api-monitoring/rules/filter/:id/update",
                  },
                ],
              },
              {
                path: "/analysis/api-monitoring/rules/agg",
                name: "聚合规则",
                routes: [
                  {
                    path: "/analysis/api-monitoring/rules/agg",
                    redirect: "/analysis/api-monitoring/rules/agg/list",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/agg/list",
                    name: "列表",
                    hideInMenu: true,
                    navigates: {
                      "/analysis/api-monitoring/rules/agg/${record.id}/update":
                        "/analysis/api-monitoring/rules/agg/${record.id}/update",
                      "/analysis/api-monitoring/rules/agg/create":
                        "/analysis/api-monitoring/rules/agg/create",
                    },
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/AggRule",
                    moduleId: "/analysis/api-monitoring/rules/agg/list",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/agg/create",
                    name: "新建",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/AggRule/components/Create",
                    moduleId: "/analysis/api-monitoring/rules/agg/create",
                  },
                  {
                    path: "/analysis/api-monitoring/rules/agg/:id/update",
                    name: "编辑",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/AggRule/components/Update",
                    moduleId: "/analysis/api-monitoring/rules/agg/:id/update",
                  },
                ],
              },
              {
                path: "/analysis/api-monitoring/rules/reload",
                name: "规则匹配",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiMonitoring/Rules/Reload",
                moduleId: "/analysis/api-monitoring/rules/reload",
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
          {
            path: "/analysis/api-monitoring/image",
            name: "API画像",
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/ApiImage",
            moduleId: "/analysis/api-monitoring/image",
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
      {
        path: "/analysis/baseline",
        name: "基线监测",
        routes: [
          {
            path: "/analysis/baseline",
            redirect: "/analysis/baseline/body-size/abnormal",
          },
          {
            path: "/analysis/baseline/body-size",
            name: "长度监测",
            routes: [
              {
                path: "/analysis/baseline/body-size",
                redirect: "/analysis/baseline/body-size/abnormal",
              },
              {
                path: "/analysis/baseline/body-size/abnormal",
                name: "异常详情",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/BodySizeMonitoring/Abnormal",
                moduleId: "/analysis/baseline/body-size/abnormal",
              },
              {
                path: "/analysis/baseline/body-size/baseline-detail",
                name: "基线详情",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/BodySizeMonitoring/Baseline/BasicModel",
                moduleId: "/analysis/baseline/body-size/baseline-detail",
              },
              {
                path: "/analysis/baseline/body-size/settings",
                name: "基线设置",
                routes: [
                  {
                    path: "/analysis/baseline/body-size/settings",
                    redirect: "/analysis/baseline/body-size/settings/basic",
                  },
                  {
                    path: "/analysis/baseline/body-size/settings/basic",
                    name: "基线",
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/BodySizeMonitoring/BasicModelSettings",
                    moduleId: "/analysis/baseline/body-size/settings/basic",
                  },
                  {
                    path: "/analysis/baseline/body-size/settings/algorithm",
                    name: "异常告警配置",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/AccessMonitoring/settings/AlertAlgorithm",
                    moduleId: "/analysis/baseline/body-size/settings/algorithm",
                  },
                ],
                moduleId: "PAGE_LAYOUT_KEY",
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
          {
            path: "/analysis/baseline/access",
            name: "总访问频次监测",
            routes: [
              {
                path: "/analysis/baseline/access",
                redirect: "/analysis/baseline/access/abnormal",
              },
              {
                path: "/analysis/baseline/access/abnormal",
                name: "异常详情",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/AccessMonitoring/Abnormal",
                moduleId: "/analysis/baseline/access/abnormal",
              },
              {
                path: "/analysis/baseline/access/baseline-detail",
                name: "基线详情",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/AccessMonitoring/Baseline",
                moduleId: "/analysis/baseline/access/baseline-detail",
              },
              {
                path: "/analysis/baseline/access/settings",
                name: "基线配置",
                routes: [
                  {
                    path: "/analysis/baseline/access/settings",
                    redirect: "/analysis/baseline/access/settings/baseline",
                  },
                  {
                    path: "/analysis/baseline/access/settings/baseline",
                    name: "基线",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/AccessMonitoring/settings/Baseline",
                    moduleId: "/analysis/baseline/access/settings/baseline",
                  },
                  {
                    path: "/analysis/baseline/access/settings/algorithm",
                    name: "异常告警配置",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/AccessMonitoring/settings/AlertAlgorithm",
                    moduleId: "/analysis/baseline/access/settings/algorithm",
                  },
                ],
                moduleId: "PAGE_LAYOUT_KEY",
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
          {
            path: "/analysis/baseline/ip-access",
            name: "IP访问频次监测",
            routes: [
              {
                path: "/analysis/baseline/ip-access",
                redirect: "/analysis/baseline/ip-access/abnormal",
              },
              {
                path: "/analysis/baseline/ip-access/abnormal",
                name: "异常详情",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/IPAccessMonitoring/Abnormal",
                moduleId: "/analysis/baseline/ip-access/abnormal",
              },
              {
                path: "/analysis/baseline/ip-access/baseline-detail",
                name: "基线详情",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/IPAccessMonitoring/Baseline",
                moduleId: "/analysis/baseline/ip-access/baseline-detail",
              },
              {
                path: "/analysis/baseline/ip-access/settings",
                name: "基线配置",
                routes: [
                  {
                    path: "/analysis/baseline/ip-access/settings",
                    redirect: "/analysis/baseline/ip-access/settings/baseline",
                  },
                  {
                    path: "/analysis/baseline/ip-access/settings/baseline",
                    name: "基线",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/IPAccessMonitoring/BaselineForm",
                    moduleId: "/analysis/baseline/ip-access/settings/baseline",
                  },
                  {
                    path: "/analysis/baseline/ip-access/settings/algorithm",
                    name: "异常告警配置",
                    hideInMenu: true,
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/analysis/AccessMonitoring/settings/AlertAlgorithm",
                    moduleId: "/analysis/baseline/ip-access/settings/algorithm",
                  },
                ],
                moduleId: "PAGE_LAYOUT_KEY",
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
    ],
  },
  {
    path: "/configuration/trace",
    name: "数据源分析",
    icon: "SearchOutlined",
    routes: [
      {
        path: "/configuration/trace",
        redirect: "/configuration/trace/http",
      },
      {
        path: "/configuration/trace/http",
        name: "HTTP详单",
        componentPath:
          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/trace/Metadata/HTTP",
        moduleId: "/configuration/trace/http",
      },
      {
        path: "/configuration/trace/All",
        name: "所有详单",
        componentPath:
          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/trace/Metadata/All",
        hideInMenu: true,
        moduleId: "/configuration/trace/All",
      },
    ],
  },
  {
    path: "/audit",
    name: "审计信息",
    icon: "AuditOutlined",
    routes: [
      {
        path: "/audit",
        redirect: "/audit/logs",
      },
      {
        path: "/audit/logs",
        name: "日志告警",
        componentPath:
          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/audit/SysLogs",
        moduleId: "/audit/logs",
      },
    ],
  },
  {
    path: "/configuration",
    name: "功能配置",
    icon: "ToolOutlined",
    routes: [
      {
        path: "/configuration",
        redirect: "/configuration/external",
      },
      {
        path: "/configuration/objects",
        name: "对象",
        routes: [
          {
            path: "/configuration/objects",
            redirect: "/configuration/objects/replace-name",
          },
          {
            path: "/configuration/objects/replace-name",
            name: "别名",
            routes: [
              {
                path: "/configuration/objects/replace-name",
                redirect: "/configuration/objects/replace-name/list",
              },
              {
                path: "/configuration/objects/replace-name/list",
                name: "列表",
                hideInMenu: true,
                navigates: {
                  "/configuration/objects/replace-name/${record.id}/update":
                    "/configuration/objects/replace-name/${record.id}/update",
                  "/configuration/objects/replace-name/create":
                    "/configuration/objects/replace-name/create",
                },
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/ReplaceName/components/ConfigName",
                moduleId: "/configuration/objects/replace-name/list",
              },
              {
                path: "/configuration/objects/replace-name/create",
                name: "新建",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/ReplaceName/components/ConfigName/Create",
                moduleId: "/configuration/objects/replace-name/create",
              },
              {
                path: "/configuration/objects/replace-name/:id/update",
                name: "编辑",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/ReplaceName/components/ConfigName/Update",
                moduleId: "/configuration/objects/replace-name/:id/update",
              },
            ],
          },
          {
            path: "/configuration/objects/internal-ip-group",
            name: "内网IP地址组",
            routes: [
              {
                path: "/configuration/objects/internal-ip-group",
                redirect: "/configuration/objects/internal-ip-group/list",
              },
              {
                path: "/configuration/objects/internal-ip-group/list",
                name: "列表",
                hideInMenu: true,
                navigates: {
                  "/configuration/objects/internal-ip-group/${record.id}/update":
                    "/configuration/objects/internal-ip-group/${record.id}/update",
                  "/configuration/objects/internal-ip-group/create":
                    "/configuration/objects/internal-ip-group/create",
                },
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/InternalIpGroup",
                moduleId: "/configuration/objects/internal-ip-group/list",
              },
              {
                path: "/configuration/objects/internal-ip-group/create",
                name: "新建",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/InternalIpGroup/Create",
                moduleId: "/configuration/objects/internal-ip-group/create",
              },
              {
                path: "/configuration/objects/internal-ip-group/:id/update",
                name: "编辑",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/InternalIpGroup/Update",
                moduleId: "/configuration/objects/internal-ip-group/:id/update",
              },
            ],
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
      {
        path: "/configuration/analysis",
        name: "专项分析",
        routes: [
          {
            path: "/configuration/analysis",
            redirect: "/configuration/analysis/custom-api-auth",
          },
          {
            path: "/configuration/analysis/custom-api-auth",
            name: "API 认证方式",
            routes: [
              {
                path: "/configuration/analysis/custom-api-auth",
                redirect: "/configuration/analysis/custom-api-auth/list",
              },
              {
                path: "/configuration/analysis/custom-api-auth/list",
                name: "列表",
                hideInMenu: true,
                navigates: {
                  "/configuration/analysis/custom-api-auth/${record.id}/update":
                    "/configuration/analysis/custom-api-auth/${record.id}/update",
                  "/configuration/analysis/custom-api-auth/create":
                    "/configuration/analysis/custom-api-auth/create",
                },
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/CustomApiAuth",
                moduleId: "/configuration/analysis/custom-api-auth/list",
              },
              {
                path: "/configuration/analysis/custom-api-auth/create",
                name: "新建",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/CustomApiAuth/components/Create",
                moduleId: "/configuration/analysis/custom-api-auth/create",
              },
              {
                path: "/configuration/analysis/custom-api-auth/:id/update",
                name: "编辑",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/CustomApiAuth/components/Update",
                moduleId: "/configuration/analysis/custom-api-auth/:id/update",
              },
            ],
          },
          {
            path: "/configuration/analysis/app-entrance",
            name: "应用程序入口",
            routes: [
              {
                path: "/configuration/analysis/app-entrance",
                redirect: "/configuration/analysis/app-entrance/list",
              },
              {
                path: "/configuration/analysis/app-entrance/list",
                name: "列表",
                hideInMenu: true,
                navigates: {
                  "/configuration/analysis/app-entrance/${record.id}/update":
                    "/configuration/analysis/app-entrance/${record.id}/update",
                  "/configuration/analysis/app-entrance/create":
                    "/configuration/analysis/app-entrance/create",
                },
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/AppEntrance",
                moduleId: "/configuration/analysis/app-entrance/list",
              },
              {
                path: "/configuration/analysis/app-entrance/create",
                name: "新建",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/AppEntrance/components/Create",
                moduleId: "/configuration/analysis/app-entrance/create",
              },
              {
                path: "/configuration/analysis/app-entrance/:id/update",
                name: "编辑",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/AppEntrance/components/Update",
                moduleId: "/configuration/analysis/app-entrance/:id/update",
              },
            ],
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
      {
        path: "/configuration/external",
        name: "外部系统",
        routes: [
          {
            path: "/configuration/external",
            redirect: "/configuration/external/third-party",
          },
          {
            path: "/configuration/external/third-party",
            name: "第三方对接",
            routes: [
              {
                path: "/configuration/external/third-party",
                redirect: "/configuration/external/third-party/server",
              },
              {
                path: "/configuration/external/third-party/server",
                name: "外发服务器",
                routes: [
                  {
                    path: "/configuration/external/third-party/server",
                    redirect:
                      "/configuration/external/third-party/server/syslog",
                  },
                  {
                    path: "/configuration/external/third-party/server/syslog",
                    name: "SYSLOG 服务器",
                    routes: [
                      {
                        path: "/configuration/external/third-party/server/syslog",
                        redirect:
                          "/configuration/external/third-party/server/syslog/list",
                      },
                      {
                        path: "/configuration/external/third-party/server/syslog/list",
                        name: "列表",
                        navigates: {
                          "/configuration/external/third-party/server/syslog/create":
                            "/configuration/external/third-party/server/syslog/create",
                        },
                        componentPath:
                          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/Server/Syslog",
                        moduleId:
                          "/configuration/external/third-party/server/syslog/list",
                      },
                      {
                        path: "/configuration/external/third-party/server/syslog/create",
                        name: "新建",
                        componentPath:
                          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/Server/Syslog/components/Create",
                        moduleId:
                          "/configuration/external/third-party/server/syslog/create",
                      },
                      {
                        path: "/configuration/external/third-party/server/syslog/:id/update",
                        name: "编辑",
                        componentPath:
                          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/Server/Syslog/components/Update",
                        moduleId:
                          "/configuration/external/third-party/server/syslog/:id/update",
                      },
                    ],
                  },
                ],
                moduleId: "PAGE_LAYOUT_KEY",
              },
              {
                path: "/configuration/external/third-party/sendup-rules",
                name: "外发规则",
                routes: [
                  {
                    path: "/configuration/external/third-party/sendup-rules",
                    redirect:
                      "/configuration/external/third-party/sendup-rules/list",
                  },
                  {
                    path: "/configuration/external/third-party/sendup-rules/list",
                    name: "列表",
                    navigates: {
                      "/configuration/external/third-party/sendup-rules/${record?.id}/update":
                        "/configuration/external/third-party/sendup-rules/${record?.id}/update",
                      "/configuration/external/third-party/sendup-rules/create":
                        "/configuration/external/third-party/sendup-rules/create",
                    },
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/SendRules",
                    moduleId:
                      "/configuration/external/third-party/sendup-rules/list",
                  },
                  {
                    path: "/configuration/external/third-party/sendup-rules/create",
                    name: "新建",
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/SendRules/components/Create",
                    moduleId:
                      "/configuration/external/third-party/sendup-rules/create",
                  },
                  {
                    path: "/configuration/external/third-party/sendup-rules/:id/update",
                    name: "编辑",
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/SendRules/components/Update",
                    moduleId:
                      "/configuration/external/third-party/sendup-rules/:id/update",
                  },
                ],
              },
              {
                path: "/configuration/external/third-party/send-policy",
                name: "外发策略",
                routes: [
                  {
                    path: "/configuration/external/third-party/send-policy",
                    redirect:
                      "/configuration/external/third-party/send-policy/list",
                  },
                  {
                    path: "/configuration/external/third-party/send-policy/list",
                    name: "列表",
                    navigates: {
                      "/configuration/external/third-party/send-policy/${record?.id}/update":
                        "/configuration/external/third-party/send-policy/${record?.id}/update",
                      "/configuration/external/third-party/send-policy/create":
                        "/configuration/external/third-party/send-policy/create",
                    },
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/SendPolicy",
                    moduleId:
                      "/configuration/external/third-party/send-policy/list",
                  },
                  {
                    path: "/configuration/external/third-party/send-policy/create",
                    name: "新建",
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/SendPolicy/components/Create",
                    moduleId:
                      "/configuration/external/third-party/send-policy/create",
                  },
                  {
                    path: "/configuration/external/third-party/send-policy/:id/update",
                    name: "编辑",
                    componentPath:
                      "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/ThirdParty/SendPolicy/components/Update",
                    moduleId:
                      "/configuration/external/third-party/send-policy/:id/update",
                  },
                ],
              },
            ],
            moduleId: "PAGE_LAYOUT_KEY",
          },
          {
            path: "/configuration/external/rest-api",
            name: "REST API",
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/RestApi",
            moduleId: "/configuration/external/rest-api",
          },
          {
            path: "/configuration/external/mcp-server",
            name: "MCP Server",
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/external/McpServer",
            moduleId: "/configuration/external/mcp-server",
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
    ],
  },
  {
    path: "/system-monitor",
    name: "系统监控",
    icon: "FundViewOutlined",
    routes: [
      {
        path: "/system-monitor",
        redirect: "/system-monitor/service",
      },
      {
        path: "/system-monitor/service",
        name: "服务监控",
        routes: [
          {
            path: "/system-monitor/service",
            redirect: "/system-monitor/service/dashboard",
          },
          {
            path: "/system-monitor/service/dashboard",
            name: "服务监控",
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/system/Monitor/Service/Dashboard",
            moduleId: "/system-monitor/service/dashboard",
          },
          {
            path: "/system-monitor/service/k8s",
            name: "K8S监控",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/k8s/Layout",
            routes: [
              {
                path: "/system-monitor/service/k8s",
                redirect: "/system-monitor/service/k8s/overview",
              },
              {
                path: "/system-monitor/service/k8s/overview",
                name: "概览",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/k8s/Overview",
                moduleId: "/system-monitor/service/k8s/overview",
              },
              {
                path: "/system-monitor/service/k8s/node",
                name: "节点状态",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/k8s/Node",
                moduleId: "/system-monitor/service/k8s/node",
              },
              {
                path: "/system-monitor/service/k8s/pod",
                name: "pod监控",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/k8s/Pod",
                moduleId: "/system-monitor/service/k8s/pod",
              },
              {
                path: "/system-monitor/service/k8s/pods/:podName/shell",
                name: "pod Shell",
                hideInMenu: true,
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/k8s/components/PodShell",
                moduleId: "/system-monitor/service/k8s/pods/:podName/shell",
              },
              {
                path: "/system-monitor/service/k8s/resource",
                name: "资源使用",
                componentPath:
                  "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/k8s/Resource",
                moduleId: "/system-monitor/service/k8s/resource",
              },
            ],
            moduleId: "/system-monitor/service/k8s",
          },
          {
            path: "/system-monitor/service/flink",
            name: "Flink监控",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Flink",
            moduleId: "/system-monitor/service/flink",
          },
          {
            path: "/system-monitor/service/kafka",
            name: "kafka监控",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/system/Monitor/Service/Detail/kafka",
            moduleId: "/system-monitor/service/kafka",
          },
          {
            path: "/system-monitor/service/dolphinScheduler",
            name: "DolphinScheduler监控",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/system/Monitor/Service/Detail/dolphin",
            moduleId: "/system-monitor/service/dolphinScheduler",
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
      {
        path: "/system-monitor/dolphinscheduler",
        name: "调度任务",
        componentPath:
          "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/DolphinScheduler/Monitor",
        moduleId: "/system-monitor/dolphinscheduler",
      },
    ],
  },
  {
    path: "/system",
    name: "系统管理",
    icon: "SettingOutlined",
    routes: [
      {
        path: "/system",
        redirect: "/system/setting",
      },
      {
        path: "/system/setting",
        name: "系统配置",
        routes: [
          {
            path: "/system/setting",
            redirect: "/system/setting/upgrade",
          },
          {
            path: "/system/setting/upgrade",
            name: "系统升级",
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/system/Upgrade",
            moduleId: "/system/setting/upgrade",
          },
          {
            path: "/system/setting/theme",
            name: "主题配置",
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/system/Theme",
            moduleId: "/system/setting/theme",
          },
        ],
        moduleId: "PAGE_LAYOUT_KEY",
      },
      {
        path: "/system/user",
        name: "用户管理",
        routes: [
          {
            path: "/system/user",
            redirect: "/system/user/list",
          },
          {
            path: "/system/user/list",
            name: "列表",
            hideInMenu: true,
            navigates: {
              "/system/user/${record.id}/update":
                "/system/user/${record.id}/update",
              "/system/user/create": "/system/user/create",
            },
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/UserManage",
            moduleId: "/system/user/list",
          },
          {
            path: "/system/user/create",
            name: "创建",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/UserManage/components/Create",
            moduleId: "/system/user/create",
          },
          {
            path: "/system/user/:id/update",
            name: "编辑",
            hideInMenu: true,
            componentPath:
              "/Users/liuze/Desktop/uda-server/packages/uda-manager-web/src/pages/Configuration/UserManage/components/Update",
            moduleId: "/system/user/:id/update",
          },
        ],
      },
    ],
  },
];

console.log(diffRoutes(current, newRoutes));
