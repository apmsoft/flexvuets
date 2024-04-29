const Arrays = {
  "general": [
  {
    "title": "제품관리",
    "action": "#/item/list",
    "id": "/item",
    "target": "",
    "icon": "<i class=\"fab fa-product-hunt\"></i>"
  },
  {
    "title": "제품그룹관리",
    "action": "#/itemgroup/list",
    "id": "/itemgroup",
    "target": "",
    "icon": "<i class=\"fa-solid fa-tags\"></i>"
  },
  {
    "title": "자료실",
    "action": "#/bbs/attach/list",
    "id": "/bbs",
    "target": "",
    "icon": "<i class=\"fa-solid fa-file-lines\"></i>"
  }],

  "superadm": [
  {
    "title": "통계",
    "action": "#/analysis/tables",
    "target": "",
    "id": "/analysis",
    "icon": "<i class=\"far fa-chart-bar\"></i>"
  },
  {
    "title": "관리자",
    "action": "#/manager/list",
    "id": "/manager",
    "target": "",
    "icon": "<i class=\"fas fa-users-cog\"></i>"
  }],

  "manager": {
    "title": "관리자",
    "auth_level": 999,
    "menus": [
    {
      "title": "목록",
      "action": "#/manager/list",
      "id": "/manager/list",
      "icon": "<i class=\"fas fa-chevron-right\"></i>",
      "class": "mb-3"
    },
    {
      "title": "관리자 등록",
      "action": "#/manager/post",
      "id": "/manager/post",
      "icon": "<button class=\"text-neutral px-1 py-0 border-0\"><i class=\"fas fa-plus\"></i></button>",
      "class": "mt-5"
    }],

    "acts": []
  },
  "analysis": {
    "title": "DB 현황",
    "auth_level": 100,
    "menus": [
    {
      "title": "DB 현황",
      "action": "#/analysis/tables",
      "id": "/analysis/tables",
      "icon": "<i class=\"fas fa-list-ul\"></i>",
      "class": "mb-3",
      "comment": "Statistics"
    }],

    "acts": []
  },
  "bbs": {
    "title": "자료실",
    "auth_level": 100,
    "menus": [],
    "acts": [
    {
      "title": "자료실",
      "action": "#/bbs/attach/list",
      "id": "/bbs/attach",
      "icon": "<i class=\"fas fa-folder-open\"></i>",
      "class": "mb-3 btn btn-outline",
      "comment": "attach"
    }]

  },
  "item": {
    "title": "제품관리",
    "auth_level": 999,
    "menus": [
    {
      "title": "목록",
      "action": "#/item/list",
      "id": "/item/list",
      "icon": "<i class=\"fas fa-chevron-right\"></i>",
      "class": "mb-3"
    },
    {
      "title": "제품 등록",
      "action": "#/item/post",
      "id": "/item/post",
      "icon": "<button class=\"text-neutral px-1 py-0 border-0\"><i class=\"fas fa-plus\"></i></button>",
      "class": "mt-5"
    }],

    "acts": [
    {
      "title": "그룹관리",
      "action": "#/itemgroup/list",
      "id": "/itemgroup/list",
      "icon": "<i class=\"fas fa-folder-open\"></i>",
      "class": "mb-3 btn btn-outline",
      "comment": "Group"
    }]

  },
  "itemgroup": {
    "title": "그룹관리",
    "auth_level": 999,
    "menus": [
    {
      "title": "목록",
      "action": "#/itemgroup/list",
      "id": "/itemgroup/list",
      "icon": "<i class=\"fas fa-chevron-right\"></i>",
      "class": "mb-3"
    },
    {
      "title": "1차 그룹 등록",
      "action": "#/itemgroup/post",
      "id": "/itemgroup/post",
      "icon": "<button class=\"text-netural p-1 border-0\"><i class=\"fas fa-plus\"></i></button>",
      "class": "mt-5"
    }],

    "acts": []
  }
};
export default Arrays;