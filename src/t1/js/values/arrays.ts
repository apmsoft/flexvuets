interface ArraysInterface {
    [propName : string]: object | any[];
}

const Arrays : ArraysInterface = {
    "general" : [
        {
            "title" : "제품관리",
            "action" : "#/item/list",
            "id" : "/item",
            "target" : "",
            "icon" : "<i class=\"fab fa-product-hunt\"></i>"
        }
        ,{
            "title" : "제품그룹관리",
            "action" : "#/itemgroup/list",
            "id" : "/itemgroup",
            "target" : "",
            "icon" : "<i class=\"fa-solid fa-tags\"></i>"
        },
        {
            "title" : "자료실",
            "action" : "#/bbs/attach/list",
            "id" : "/bbs",
            "target" : "",
            "icon" : "<i class=\"fa-solid fa-file-lines\"></i>"
        }
    ],
    "superadm" : [
        {
            "title" : "통계",
            "action" : "#/analysis/tables",
            "target" : "",
            "id" : "/analysis",
            "icon" : "<i class=\"far fa-chart-bar\"></i>"
        },
        {
            "title" : "관리자",
            "action" : "#/manager/list",
            "id" : "/manager",
            "target" : "",
            "icon" : "<i class=\"fas fa-users-cog\"></i>"
        }
    ],
    "manager" : {
        "title"         : "관리자",
        "auth_level"    : 999,
        "menus"         : [
            {
                "title" : "목록",
                "action": "#/manager/list",
                "id" : "/manager/list",
                "icon"  : "<i class=\"fas fa-chevron-right\"></i>",
                "class" : "text-gray-400 mb-3"
            },
            {
                "title" : "관리자 등록",
                "action": "#/manager/post",
                "id" : "/manager/post",
                "icon"  : "<button class=\"btn p-1 border-0 bg-blue-dark w-8 text-sm text-blue-100\"><i class=\"fas fa-plus\"></i></button>",
                "class" : "mt-5 btn bg-blue-default text-white"
            }
        ],
        "acts"          : [
        ]
    },
    "analysis" :{
        "title"     : "DB 현황",
        "auth_level": 100,
        "menus"         : [
            {
                "title"  : "DB 현황",
                "action": "#/analysis/tables",
                "id" : "/analysis/tables",
                "icon"   : "<i class=\"fas fa-list-ul\"></i>",
                "class"  : "mb-3 text-gray-500",
                "comment": "Statistics"
            }
        ],
        "acts"          : [
        ]
    },
    "bbs" : {
        "title"     : "자료실",
        "auth_level": 100,
        "menus"         : [
        ],
        "acts"          : [
            {
                "title": "자료실",
                "action" : "#/bbs/attach/list",
                "id" : "/bbs/attach",
                "icon": "<i class=\"fas fa-folder-open\"></i>",
                "class"  : "mb-3 text-gray-500",
                "comment" : "attach"
            }
        ]
    },
    "item" : {
        "title"         : "제품관리",
        "auth_level"    : 999,
        "menus"         : [
            {
                "title" : "목록",
                "action": "#/item/list",
                "id" : "/item/list",
                "icon"  : "<i class=\"fas fa-chevron-right\"></i>",
                "class" : "text-gray-400 mb-3"
            },
            {
                "title" : "제품 등록",
                "action": "#/item/post",
                "id" : "/item/post",
                "icon"  : "<button class=\"btn p-1 border-0 bg-blue-dark w-8 text-sm text-blue-100\"><i class=\"fas fa-plus\"></i></button>",
                "class" : "mt-5 btn bg-blue-default text-white"
            }
        ],
        "acts"          : [
            {
                "title": "그룹관리",
                "action" : "#/itemgroup/list",
                "id" : "/itemgroup/list",
                "icon": "<i class=\"fas fa-folder-open\"></i>",
                "class"  : "mb-3 text-gray-500",
                "comment" : "Group"
            }
        ]
    },
    "itemgroup" : {
        "title"         : "그룹관리",
        "auth_level"    : 999,
        "menus"         : [
            {
                "title" : "목록",
                "action": "#/itemgroup/list",
                "id" : "/itemgroup/list",
                "icon"  : "<i class=\"fas fa-chevron-right\"></i>",
                "class" : "text-gray-400 mb-3"
            },
            {
                "title" : "1차 그룹 등록",
                "action": "#/itemgroup/post",
                "id" : "/itemgroup/post",
                "icon"  : "<button class=\"btn p-1 border-0 bg-blue-dark w-8 text-sm text-blue-100\"><i class=\"fas fa-plus\"></i></button>",
                "class" : "mt-5 btn bg-blue-default text-white"
            }
        ],
        "acts"          : [
        ]
    }
}

export default Arrays;