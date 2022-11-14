import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  { 
    "/java/": [
      {
        text: "概述",
        link: "java-overview.md"
      },
      {
        text: "一、JAVA基础",
        prefix: "1.basic/",
        collapsable: true,
        children: [
          "1.datatype.md",
          "2.operator.md"
        ],
      },
      {
        text: "二、面向对象",
        prefix: "2.OOP/",
        collapsable: true,
        children: [
          "basetype.md"
        ],
      },
    ],




    "/k8s/" : [
      {
        text: "Kubernetes概述",
        link: "k8s-overview.md"
      },
      {
        text: "一、架构",
        prefix: "1.architecture/",
        collapsable: true,
        children: [
          "api-server.md"
        ],
      },
      {
        text: "二、资源",
        prefix: "2.resources/",
        collapsable: true,
        children: [
          {
            text: "2.1 工作负载",
            collapsable: true,
            prefix: "1.workloads/",
            children: [
              "deployment.md",
              "pod.md",
              "replicaset.md"
            ],
          },
          {
            text: "2.2 服务、网络",
            collapsable: true,
            prefix: "2.services/",
            children: [
              "service.md",
            ],
          }
        ],
      },
    ]
  }
);
