const Arrays = {
  "general": [
  {
    "title": "Product Management",
    "action": "#/item/list",
    "id": "/item",
    "target": "",
    "icon": "<i class=\"fab fa-product-hunt\"></i>"
  },
  {
    "title": "Product group management",
    "action": "#/itemgroup/list",
    "id": "/itemgroup",
    "target": "",
    "icon": "<i class=\"fa-solid fa-tags\"></i>"
  },
  {
    "title": "reference Room",
    "action": "#/bbs/attach/list",
    "id": "/bbs",
    "target": "",
    "icon": "<i class=\"fa-solid fa-file-lines\"></i>"
  }],

  "superadm": [
  {
    "title": "statistics",
    "action": "#/analysis/tables",
    "target": "",
    "id": "/analysis",
    "icon": "<i class=\"far fa-chart-bar\"></i>"
  },
  {
    "title": "manager",
    "action": "#/manager/list",
    "id": "/manager",
    "target": "",
    "icon": "<i class=\"fas fa-users-cog\"></i>"
  }],

  "manager": {
    "title": "manager",
    "auth_level": 999,
    "menus": [
    {
      "title": "List",
      "action": "#/manager/list",
      "id": "/manager/list",
      "icon": "<i class=\"fas fa-chevron-right\"></i>",
      "class": "text-gray-400 mb-3"
    },
    {
      "title": "Administrator registration",
      "action": "#/manager/post",
      "id": "/manager/post",
      "icon": "<button class=\"btn p-1 border-0 bg-blue-dark w-8 text-sm text-blue-100\"><i class=\"fas fa-plus\"></i></button>",
      "class": "mt-5 btn bg-blue-default text-white"
    }],

    "acts": []
  },
  "analysis": {
    "title": "DB status",
    "auth_level": 100,
    "menus": [
    {
      "title": "DB status",
      "action": "#/analysis/tables",
      "id": "/analysis/tables",
      "icon": "<i class=\"fas fa-list-ul\"></i>",
      "class": "mb-3 text-gray-500",
      "comment": "Statistics"
    }],

    "acts": []
  },
  "bbs": {
    "title": "reference Room",
    "auth_level": 100,
    "menus": [],
    "acts": [
    {
      "title": "자료실",
      "action": "#/bbs/attach/list",
      "id": "/bbs/attach",
      "icon": "<i class=\"fas fa-folder-open\"></i>",
      "class": "mb-3 text-gray-500",
      "comment": "attach"
    }]

  },
  "item": {
    "title": "Product Management",
    "auth_level": 999,
    "menus": [
    {
      "title": "목록",
      "action": "#/item/list",
      "id": "/item/list",
      "icon": "<i class=\"fas fa-chevron-right\"></i>",
      "class": "text-gray-400 mb-3"
    },
    {
      "title": "Product Registration",
      "action": "#/item/post",
      "id": "/item/post",
      "icon": "<button class=\"btn p-1 border-0 bg-blue-dark w-8 text-sm text-blue-100\"><i class=\"fas fa-plus\"></i></button>",
      "class": "mt-5 btn bg-blue-default text-white"
    }],

    "acts": [
    {
      "title": "Group management",
      "action": "#/itemgroup/list",
      "id": "/itemgroup/list",
      "icon": "<i class=\"fas fa-folder-open\"></i>",
      "class": "mb-3 text-gray-500",
      "comment": "Group"
    }]

  },
  "itemgroup": {
    "title": "Group management",
    "auth_level": 999,
    "menus": [
    {
      "title": "List",
      "action": "#/itemgroup/list",
      "id": "/itemgroup/list",
      "icon": "<i class=\"fas fa-chevron-right\"></i>",
      "class": "text-gray-400 mb-3"
    },
    {
      "title": "1st group registration",
      "action": "#/itemgroup/post",
      "id": "/itemgroup/post",
      "icon": "<button class=\"btn p-1 border-0 bg-blue-dark w-8 text-sm text-blue-100\"><i class=\"fas fa-plus\"></i></button>",
      "class": "mt-5 btn bg-blue-default text-white"
    }],

    "acts": []
  }
};
export default Arrays;