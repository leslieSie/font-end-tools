/**
 * Created by lr on 16/6/23.
 */
function getArea() {
    var json2=[
        {
            "id": "10",
            "name": "北京市",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "11",
            "name": "天津市",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "12",
            "name": "河北省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "13",
            "name": "内蒙古",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "14",
            "name": "山西省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "20",
            "name": "辽宁省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "21",
            "name": "吉林省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "22",
            "name": "黑龙江省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "30",
            "name": "上海市",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "31",
            "name": "江苏省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "32",
            "name": "山东省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "33",
            "name": "安徽省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "34",
            "name": "福建省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "35",
            "name": "浙江省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "36",
            "name": "江西省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "40",
            "name": "广东省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "41",
            "name": "广西",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "42",
            "name": "海南省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "60",
            "name": "重庆市",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "61",
            "name": "四川省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "62",
            "name": "云南省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "63",
            "name": "贵州省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "64",
            "name": "西藏",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "70",
            "name": "河南省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "71",
            "name": "湖北省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "72",
            "name": "湖南省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "80",
            "name": "陕西省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "81",
            "name": "青海省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "82",
            "name": "宁夏",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "83",
            "name": "新疆",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "84",
            "name": "甘肃省",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "90",
            "name": "香港",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "91",
            "name": "澳门",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "92",
            "name": "台湾",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "93",
            "name": "国外",
            "level": "1",
            "parent_id": "0"
        },
        {
            "id": "1001",
            "name": "东城区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1002",
            "name": "西城区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1005",
            "name": "朝阳区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1006",
            "name": "海淀区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1007",
            "name": "丰台区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1008",
            "name": "石景山区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1009",
            "name": "顺义区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1010",
            "name": "昌平区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1011",
            "name": "门头沟区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1012",
            "name": "通州区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1013",
            "name": "房山区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1014",
            "name": "大兴区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1015",
            "name": "延庆县",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1016",
            "name": "怀柔区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1017",
            "name": "平谷区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1018",
            "name": "密云县",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1019",
            "name": "亦庄开发区",
            "level": "2",
            "parent_id": "10"
        },
        {
            "id": "1101",
            "name": "和平区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1102",
            "name": "河北区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1103",
            "name": "河东区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1104",
            "name": "河西区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1105",
            "name": "南开区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1106",
            "name": "红桥区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1107",
            "name": "滨海新区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1110",
            "name": "东丽区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1111",
            "name": "西青区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1112",
            "name": "津南区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1113",
            "name": "北辰区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1114",
            "name": "武清区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1115",
            "name": "宝坻区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1116",
            "name": "蓟县",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1117",
            "name": "宁河县",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1118",
            "name": "静海县",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1119",
            "name": "开发区",
            "level": "2",
            "parent_id": "11"
        },
        {
            "id": "1201",
            "name": "石家庄市",
            "level": "2",
            "parent_id": "12"
        },
        {
            "id": "1202",
            "name": "秦皇岛市",
            "level": "2",
            "parent_id": "12"
        },
        {
            "id": "1203",
            "name": "唐山市",
            "level": "2",
            "parent_id": "12"
        },
        {
            "id": "1204",
            "name": "张家口市",
            "level": "2",
            "parent_id": "12"
        },
        {
            "id": "1205",
            "name": "廊坊市",
            "level": "2",
            "parent_id": "12"
        },
        {
            "id": "1206",
            "name": "衡水市",
            "level": "2",
            "parent_id": "12"
        },
        {
            "id": "1207",
            "name": "保定市",
            "level": "2",
            "parent_id": "12"
        },
        {
            "id": "1208",
            "name": "承德市",
            "level": "2",
            "parent_id": "12"
        },
        {
            "id": "1209",
            "name": "邢台市",
            "level": "2",
            "parent_id": "12"
        },
        {
            "id": "1210",
            "name": "沧州市",
            "level": "2",
            "parent_id": "12"
        },
        {
            "id": "1211",
            "name": "邯郸市",
            "level": "2",
            "parent_id": "12"
        },
        {
            "id": "1301",
            "name": "呼和浩特市",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1302",
            "name": "包头市",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1303",
            "name": "呼伦贝尔市",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1304",
            "name": "兴安盟",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1305",
            "name": "通辽市",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1306",
            "name": "赤峰市",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1307",
            "name": "锡林郭勒盟",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1308",
            "name": "乌兰察布市",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1309",
            "name": "鄂尔多斯市",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1310",
            "name": "巴彦淖尔市",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1311",
            "name": "乌海市",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1312",
            "name": "阿拉善盟",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1313",
            "name": "满洲里",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1314",
            "name": "二连浩特",
            "level": "2",
            "parent_id": "13"
        },
        {
            "id": "1401",
            "name": "太原市",
            "level": "2",
            "parent_id": "14"
        },
        {
            "id": "1402",
            "name": "大同市",
            "level": "2",
            "parent_id": "14"
        },
        {
            "id": "1403",
            "name": "阳泉市",
            "level": "2",
            "parent_id": "14"
        },
        {
            "id": "1404",
            "name": "长治市",
            "level": "2",
            "parent_id": "14"
        },
        {
            "id": "1405",
            "name": "晋城市",
            "level": "2",
            "parent_id": "14"
        },
        {
            "id": "1406",
            "name": "朔州市",
            "level": "2",
            "parent_id": "14"
        },
        {
            "id": "1407",
            "name": "忻州市",
            "level": "2",
            "parent_id": "14"
        },
        {
            "id": "1408",
            "name": "晋中市",
            "level": "2",
            "parent_id": "14"
        },
        {
            "id": "1409",
            "name": "临汾市",
            "level": "2",
            "parent_id": "14"
        },
        {
            "id": "1410",
            "name": "吕梁市",
            "level": "2",
            "parent_id": "14"
        },
        {
            "id": "1411",
            "name": "运城市",
            "level": "2",
            "parent_id": "14"
        },
        {
            "id": "2001",
            "name": "沈阳市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2002",
            "name": "大连市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2003",
            "name": "鞍山市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2004",
            "name": "锦州市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2005",
            "name": "丹东市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2006",
            "name": "盘锦市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2007",
            "name": "铁岭市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2008",
            "name": "抚顺市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2009",
            "name": "营口市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2010",
            "name": "辽阳市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2011",
            "name": "阜新市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2012",
            "name": "本溪市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2013",
            "name": "朝阳市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2014",
            "name": "葫芦岛市",
            "level": "2",
            "parent_id": "20"
        },
        {
            "id": "2101",
            "name": "长春市",
            "level": "2",
            "parent_id": "21"
        },
        {
            "id": "2102",
            "name": "吉林市",
            "level": "2",
            "parent_id": "21"
        },
        {
            "id": "2103",
            "name": "四平市",
            "level": "2",
            "parent_id": "21"
        },
        {
            "id": "2104",
            "name": "辽源市",
            "level": "2",
            "parent_id": "21"
        },
        {
            "id": "2105",
            "name": "通化市",
            "level": "2",
            "parent_id": "21"
        },
        {
            "id": "2106",
            "name": "白山市",
            "level": "2",
            "parent_id": "21"
        },
        {
            "id": "2107",
            "name": "松原市",
            "level": "2",
            "parent_id": "21"
        },
        {
            "id": "2108",
            "name": "白城市",
            "level": "2",
            "parent_id": "21"
        },
        {
            "id": "2109",
            "name": "延边州",
            "level": "2",
            "parent_id": "21"
        },
        {
            "id": "2201",
            "name": "哈尔滨市",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "2202",
            "name": "齐齐哈尔市",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "2203",
            "name": "鸡西市",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "2204",
            "name": "鹤岗市",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "2205",
            "name": "双鸭山市",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "2206",
            "name": "大庆市",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "2207",
            "name": "伊春市",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "2208",
            "name": "佳木斯市",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "2209",
            "name": "七台河市",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "2210",
            "name": "牡丹江市",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "2211",
            "name": "黑河市",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "2212",
            "name": "绥化市",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "2213",
            "name": "大兴安岭地区",
            "level": "2",
            "parent_id": "22"
        },
        {
            "id": "3001",
            "name": "宝山区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3002",
            "name": "金山区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3004",
            "name": "长宁区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3005",
            "name": "静安区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3006",
            "name": "青浦区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3007",
            "name": "崇明县",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3009",
            "name": "松江区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3010",
            "name": "奉贤区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3011",
            "name": "浦东新区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3012",
            "name": "杨浦区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3013",
            "name": "虹口区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3014",
            "name": "普陀区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3015",
            "name": "闸北区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3016",
            "name": "黄浦区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3017",
            "name": "闵行区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3018",
            "name": "徐汇区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3019",
            "name": "嘉定区",
            "level": "2",
            "parent_id": "30"
        },
        {
            "id": "3101",
            "name": "南京市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3102",
            "name": "苏州市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3103",
            "name": "无锡市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3104",
            "name": "镇江市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3105",
            "name": "扬州市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3106",
            "name": "南通市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3107",
            "name": "常州市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3108",
            "name": "徐州市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3109",
            "name": "连云港市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3110",
            "name": "盐城市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3111",
            "name": "淮安市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3112",
            "name": "泰州市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3113",
            "name": "宿迁市",
            "level": "2",
            "parent_id": "31"
        },
        {
            "id": "3201",
            "name": "济南市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3202",
            "name": "青岛市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3203",
            "name": "烟台市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3204",
            "name": "淄博市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3205",
            "name": "泰安市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3206",
            "name": "潍坊市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3207",
            "name": "济宁市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3208",
            "name": "枣庄市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3209",
            "name": "德州市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3210",
            "name": "威海市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3211",
            "name": "日照市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3212",
            "name": "莱芜市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3213",
            "name": "滨州市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3214",
            "name": "东营市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3215",
            "name": "聊城市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3216",
            "name": "菏泽市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3217",
            "name": "临沂市",
            "level": "2",
            "parent_id": "32"
        },
        {
            "id": "3301",
            "name": "合肥市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3302",
            "name": "芜湖市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3303",
            "name": "蚌埠市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3304",
            "name": "马鞍山市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3305",
            "name": "淮北市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3306",
            "name": "铜陵市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3307",
            "name": "安庆市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3308",
            "name": "黄山市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3309",
            "name": "滁州市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3310",
            "name": "宿州市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3311",
            "name": "池州市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3312",
            "name": "淮南市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3313",
            "name": "巢湖市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3314",
            "name": "阜阳市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3315",
            "name": "六安市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3316",
            "name": "宣城市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3317",
            "name": "亳州市",
            "level": "2",
            "parent_id": "33"
        },
        {
            "id": "3401",
            "name": "福州市",
            "level": "2",
            "parent_id": "34"
        },
        {
            "id": "3402",
            "name": "厦门市",
            "level": "2",
            "parent_id": "34"
        },
        {
            "id": "3403",
            "name": "漳州市",
            "level": "2",
            "parent_id": "34"
        },
        {
            "id": "3404",
            "name": "泉州市",
            "level": "2",
            "parent_id": "34"
        },
        {
            "id": "3405",
            "name": "莆田市",
            "level": "2",
            "parent_id": "34"
        },
        {
            "id": "3406",
            "name": "三明市",
            "level": "2",
            "parent_id": "34"
        },
        {
            "id": "3407",
            "name": "南平市",
            "level": "2",
            "parent_id": "34"
        },
        {
            "id": "3408",
            "name": "龙岩市",
            "level": "2",
            "parent_id": "34"
        },
        {
            "id": "3409",
            "name": "宁德市",
            "level": "2",
            "parent_id": "34"
        },
        {
            "id": "3501",
            "name": "杭州市",
            "level": "2",
            "parent_id": "35"
        },
        {
            "id": "3502",
            "name": "宁波市",
            "level": "2",
            "parent_id": "35"
        },
        {
            "id": "3503",
            "name": "温州市",
            "level": "2",
            "parent_id": "35"
        },
        {
            "id": "3504",
            "name": "嘉兴市",
            "level": "2",
            "parent_id": "35"
        },
        {
            "id": "3505",
            "name": "湖州市",
            "level": "2",
            "parent_id": "35"
        },
        {
            "id": "3506",
            "name": "绍兴市",
            "level": "2",
            "parent_id": "35"
        },
        {
            "id": "3507",
            "name": "金华市",
            "level": "2",
            "parent_id": "35"
        },
        {
            "id": "3508",
            "name": "衢州市",
            "level": "2",
            "parent_id": "35"
        },
        {
            "id": "3509",
            "name": "舟山市",
            "level": "2",
            "parent_id": "35"
        },
        {
            "id": "3510",
            "name": "台州市",
            "level": "2",
            "parent_id": "35"
        },
        {
            "id": "3511",
            "name": "丽水市",
            "level": "2",
            "parent_id": "35"
        },
        {
            "id": "3601",
            "name": "南昌市",
            "level": "2",
            "parent_id": "36"
        },
        {
            "id": "3602",
            "name": "景德镇市",
            "level": "2",
            "parent_id": "36"
        },
        {
            "id": "3603",
            "name": "萍乡市",
            "level": "2",
            "parent_id": "36"
        },
        {
            "id": "3604",
            "name": "九江市",
            "level": "2",
            "parent_id": "36"
        },
        {
            "id": "3605",
            "name": "新余市",
            "level": "2",
            "parent_id": "36"
        },
        {
            "id": "3606",
            "name": "鹰潭市",
            "level": "2",
            "parent_id": "36"
        },
        {
            "id": "3607",
            "name": "赣州市",
            "level": "2",
            "parent_id": "36"
        },
        {
            "id": "3608",
            "name": "吉安市",
            "level": "2",
            "parent_id": "36"
        },
        {
            "id": "3609",
            "name": "宜春市",
            "level": "2",
            "parent_id": "36"
        },
        {
            "id": "3610",
            "name": "抚州市",
            "level": "2",
            "parent_id": "36"
        },
        {
            "id": "3611",
            "name": "上饶市",
            "level": "2",
            "parent_id": "36"
        },
        {
            "id": "4001",
            "name": "广州市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4002",
            "name": "深圳市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4003",
            "name": "珠海市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4004",
            "name": "汕头市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4005",
            "name": "韶关市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4006",
            "name": "河源市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4007",
            "name": "梅州市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4008",
            "name": "惠州市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4009",
            "name": "汕尾市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4010",
            "name": "东莞市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4011",
            "name": "中山市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4012",
            "name": "江门市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4013",
            "name": "佛山市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4014",
            "name": "阳江市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4015",
            "name": "湛江市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4016",
            "name": "茂名市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4017",
            "name": "肇庆市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4018",
            "name": "清远市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4019",
            "name": "潮州市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4020",
            "name": "揭阳市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4021",
            "name": "云浮市",
            "level": "2",
            "parent_id": "40"
        },
        {
            "id": "4101",
            "name": "南宁市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4102",
            "name": "柳州市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4103",
            "name": "桂林市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4104",
            "name": "梧州市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4105",
            "name": "北海市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4106",
            "name": "防城港市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4107",
            "name": "钦州市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4108",
            "name": "贵港市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4109",
            "name": "玉林市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4110",
            "name": "百色市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4111",
            "name": "贺州市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4112",
            "name": "河池市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4113",
            "name": "来宾市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4114",
            "name": "崇左市",
            "level": "2",
            "parent_id": "41"
        },
        {
            "id": "4201",
            "name": "海口市",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4202",
            "name": "三亚市",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4203",
            "name": "琼海市",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4204",
            "name": "儋州市",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4205",
            "name": "文昌市",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4206",
            "name": "东方市",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4207",
            "name": "五指山市",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4208",
            "name": "万宁市",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4209",
            "name": "定安县",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4210",
            "name": "屯昌县",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4211",
            "name": "澄迈县",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4212",
            "name": "临高县",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4213",
            "name": "陵水县",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4214",
            "name": "琼中县",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4215",
            "name": "保亭县",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4216",
            "name": "乐东县",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4217",
            "name": "昌江县",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4218",
            "name": "白沙县",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "4219",
            "name": "洋浦",
            "level": "2",
            "parent_id": "42"
        },
        {
            "id": "6001",
            "name": "万州区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6002",
            "name": "涪陵区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6003",
            "name": "渝中区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6004",
            "name": "大渡口区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6005",
            "name": "江北区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6006",
            "name": "沙坪坝区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6007",
            "name": "九龙坡区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6008",
            "name": "南岸区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6009",
            "name": "北碚区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6010",
            "name": "万盛区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6011",
            "name": "双桥区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6012",
            "name": "渝北区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6013",
            "name": "巴南区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6014",
            "name": "黔江区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6015",
            "name": "长寿区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6016",
            "name": "江津区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6017",
            "name": "合川区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6018",
            "name": "永川区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6019",
            "name": "南川区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6020",
            "name": "綦江县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6021",
            "name": "潼南县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6022",
            "name": "铜梁县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6023",
            "name": "大足县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6024",
            "name": "荣昌县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6025",
            "name": "璧山县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6026",
            "name": "梁平县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6027",
            "name": "城口县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6028",
            "name": "丰都县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6029",
            "name": "垫江县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6030",
            "name": "武隆县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6031",
            "name": "忠县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6032",
            "name": "开县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6033",
            "name": "云阳县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6034",
            "name": "奉节县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6035",
            "name": "巫山县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6036",
            "name": "巫溪县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6037",
            "name": "石柱县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6038",
            "name": "秀山县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6039",
            "name": "酉阳县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6040",
            "name": "彭水苗族县",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6041",
            "name": "开发区",
            "level": "2",
            "parent_id": "60"
        },
        {
            "id": "6101",
            "name": "成都市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6102",
            "name": "德阳市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6103",
            "name": "绵阳市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6104",
            "name": "眉山市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6105",
            "name": "泸州市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6106",
            "name": "南充市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6107",
            "name": "自贡市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6108",
            "name": "内江市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6109",
            "name": "宜宾市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6110",
            "name": "乐山市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6111",
            "name": "雅安市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6112",
            "name": "遂宁市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6113",
            "name": "达州市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6114",
            "name": "巴中市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6115",
            "name": "广元市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6116",
            "name": "广安市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6117",
            "name": "资阳市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6118",
            "name": "阿坝州",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6119",
            "name": "攀枝花市",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6120",
            "name": "甘孜州",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6121",
            "name": "凉山州",
            "level": "2",
            "parent_id": "61"
        },
        {
            "id": "6201",
            "name": "昆明市",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6202",
            "name": "曲靖市",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6203",
            "name": "玉溪市",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6204",
            "name": "昭通市",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6205",
            "name": "楚雄州",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6206",
            "name": "红河哈尼族州",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6207",
            "name": "丽江市",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6208",
            "name": "迪庆州",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6209",
            "name": "文山州",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6210",
            "name": "西双版纳州",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6211",
            "name": "普洱市",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6212",
            "name": "大理",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6213",
            "name": "保山市",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6214",
            "name": "德宏",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6215",
            "name": "怒江",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6216",
            "name": "临沧市",
            "level": "2",
            "parent_id": "62"
        },
        {
            "id": "6301",
            "name": "贵阳市",
            "level": "2",
            "parent_id": "63"
        },
        {
            "id": "6302",
            "name": "遵义市",
            "level": "2",
            "parent_id": "63"
        },
        {
            "id": "6303",
            "name": "六盘水市",
            "level": "2",
            "parent_id": "63"
        },
        {
            "id": "6304",
            "name": "安顺市",
            "level": "2",
            "parent_id": "63"
        },
        {
            "id": "6305",
            "name": "黔西南",
            "level": "2",
            "parent_id": "63"
        },
        {
            "id": "6306",
            "name": "黔南",
            "level": "2",
            "parent_id": "63"
        },
        {
            "id": "6307",
            "name": "铜仁地区",
            "level": "2",
            "parent_id": "63"
        },
        {
            "id": "6308",
            "name": "毕节地区",
            "level": "2",
            "parent_id": "63"
        },
        {
            "id": "6309",
            "name": "黔东南",
            "level": "2",
            "parent_id": "63"
        },
        {
            "id": "6401",
            "name": "拉萨市",
            "level": "2",
            "parent_id": "64"
        },
        {
            "id": "6402",
            "name": "日喀则地区",
            "level": "2",
            "parent_id": "64"
        },
        {
            "id": "6403",
            "name": "山南地区",
            "level": "2",
            "parent_id": "64"
        },
        {
            "id": "6404",
            "name": "林芝地区",
            "level": "2",
            "parent_id": "64"
        },
        {
            "id": "6405",
            "name": "昌都地区",
            "level": "2",
            "parent_id": "64"
        },
        {
            "id": "6406",
            "name": "那曲地区",
            "level": "2",
            "parent_id": "64"
        },
        {
            "id": "6407",
            "name": "阿里地区",
            "level": "2",
            "parent_id": "64"
        },
        {
            "id": "7001",
            "name": "郑州市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7002",
            "name": "洛阳市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7003",
            "name": "开封市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7004",
            "name": "安阳市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7005",
            "name": "新乡市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7006",
            "name": "濮阳市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7007",
            "name": "焦作市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7008",
            "name": "鹤壁市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7009",
            "name": "三门峡市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7010",
            "name": "商丘市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7011",
            "name": "许昌市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7012",
            "name": "漯河市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7013",
            "name": "平顶山市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7014",
            "name": "驻马店市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7015",
            "name": "周口市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7016",
            "name": "南阳市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7017",
            "name": "信阳市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7018",
            "name": "济源市",
            "level": "2",
            "parent_id": "70"
        },
        {
            "id": "7101",
            "name": "武汉市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7102",
            "name": "黄石市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7103",
            "name": "襄阳市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7104",
            "name": "十堰市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7105",
            "name": "荆州市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7106",
            "name": "宜昌市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7107",
            "name": "荆门市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7108",
            "name": "鄂州市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7109",
            "name": "孝感市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7110",
            "name": "黄冈市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7111",
            "name": "咸宁市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7112",
            "name": "随州市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7113",
            "name": "恩施",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7114",
            "name": "潜江市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7115",
            "name": "仙桃市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7116",
            "name": "天门市",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7117",
            "name": "神农架林区",
            "level": "2",
            "parent_id": "71"
        },
        {
            "id": "7201",
            "name": "长沙市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7202",
            "name": "株洲市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7203",
            "name": "湘潭市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7204",
            "name": "衡阳市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7205",
            "name": "益阳市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7206",
            "name": "常德市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7207",
            "name": "岳阳市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7208",
            "name": "邵阳市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7209",
            "name": "郴州市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7210",
            "name": "娄底市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7211",
            "name": "永州市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7212",
            "name": "怀化市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7213",
            "name": "张家界市",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "7214",
            "name": "湘西",
            "level": "2",
            "parent_id": "72"
        },
        {
            "id": "8001",
            "name": "西安市",
            "level": "2",
            "parent_id": "80"
        },
        {
            "id": "8002",
            "name": "宝鸡市",
            "level": "2",
            "parent_id": "80"
        },
        {
            "id": "8003",
            "name": "咸阳市",
            "level": "2",
            "parent_id": "80"
        },
        {
            "id": "8004",
            "name": "渭南市",
            "level": "2",
            "parent_id": "80"
        },
        {
            "id": "8005",
            "name": "延安市",
            "level": "2",
            "parent_id": "80"
        },
        {
            "id": "8006",
            "name": "榆林市",
            "level": "2",
            "parent_id": "80"
        },
        {
            "id": "8007",
            "name": "铜川市",
            "level": "2",
            "parent_id": "80"
        },
        {
            "id": "8008",
            "name": "汉中市",
            "level": "2",
            "parent_id": "80"
        },
        {
            "id": "8009",
            "name": "安康市",
            "level": "2",
            "parent_id": "80"
        },
        {
            "id": "8010",
            "name": "商洛市",
            "level": "2",
            "parent_id": "80"
        },
        {
            "id": "8011",
            "name": "杨凌",
            "level": "2",
            "parent_id": "80"
        },
        {
            "id": "8101",
            "name": "西宁市",
            "level": "2",
            "parent_id": "81"
        },
        {
            "id": "8102",
            "name": "海东地区",
            "level": "2",
            "parent_id": "81"
        },
        {
            "id": "8103",
            "name": "海南州",
            "level": "2",
            "parent_id": "81"
        },
        {
            "id": "8104",
            "name": "海北州",
            "level": "2",
            "parent_id": "81"
        },
        {
            "id": "8105",
            "name": "海西蒙古族州",
            "level": "2",
            "parent_id": "81"
        },
        {
            "id": "8106",
            "name": "黄南州",
            "level": "2",
            "parent_id": "81"
        },
        {
            "id": "8107",
            "name": "果洛州",
            "level": "2",
            "parent_id": "81"
        },
        {
            "id": "8108",
            "name": "玉树州",
            "level": "2",
            "parent_id": "81"
        },
        {
            "id": "8201",
            "name": "银川市",
            "level": "2",
            "parent_id": "82"
        },
        {
            "id": "8202",
            "name": "石嘴山市",
            "level": "2",
            "parent_id": "82"
        },
        {
            "id": "8203",
            "name": "吴忠市",
            "level": "2",
            "parent_id": "82"
        },
        {
            "id": "8204",
            "name": "固原市",
            "level": "2",
            "parent_id": "82"
        },
        {
            "id": "8205",
            "name": "中卫市",
            "level": "2",
            "parent_id": "82"
        },
        {
            "id": "8301",
            "name": "乌鲁木齐市",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8302",
            "name": "伊犁州",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8303",
            "name": "阿勒泰地区",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8304",
            "name": "塔城地区",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8305",
            "name": "博尔塔拉",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8306",
            "name": "昌吉",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8307",
            "name": "吐鲁番地区",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8308",
            "name": "巴音郭楞",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8309",
            "name": "哈密地区",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8310",
            "name": "和田地区",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8311",
            "name": "阿克苏地区",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8312",
            "name": "克孜勒苏",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8313",
            "name": "喀什地区",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8314",
            "name": "克拉玛依市",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8315",
            "name": "石河子市",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8316",
            "name": "五家渠市",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8317",
            "name": "阿拉尔市",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8318",
            "name": "图木舒克市",
            "level": "2",
            "parent_id": "83"
        },
        {
            "id": "8401",
            "name": "兰州市",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8402",
            "name": "天水市",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8403",
            "name": "嘉峪关市",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8404",
            "name": "武威市",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8405",
            "name": "金昌市",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8406",
            "name": "酒泉市",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8407",
            "name": "张掖市",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8408",
            "name": "庆阳市",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8409",
            "name": "平凉市",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8410",
            "name": "白银市",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8411",
            "name": "定西市",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8412",
            "name": "陇南市",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8413",
            "name": "临夏",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "8414",
            "name": "甘南州",
            "level": "2",
            "parent_id": "84"
        },
        {
            "id": "120102",
            "name": "长安区",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120103",
            "name": "桥东区",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120104",
            "name": "桥西区",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120105",
            "name": "新华区",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120106",
            "name": "井陉矿区",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120107",
            "name": "裕华区",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120108",
            "name": "井陉县",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120109",
            "name": "正定县",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120110",
            "name": "栾城县",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120111",
            "name": "行唐县",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120112",
            "name": "灵寿县",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120113",
            "name": "高邑县",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120114",
            "name": "深泽县",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120115",
            "name": "赞皇县",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120116",
            "name": "无极县",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120117",
            "name": "平山县",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120118",
            "name": "元氏县",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120119",
            "name": "赵县",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120120",
            "name": "辛集市",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120121",
            "name": "藁城市",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120122",
            "name": "晋州市",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120123",
            "name": "新乐市",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120124",
            "name": "鹿泉市",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120125",
            "name": "高新区",
            "level": "3",
            "parent_id": "1201"
        },
        {
            "id": "120202",
            "name": "海港区",
            "level": "3",
            "parent_id": "1202"
        },
        {
            "id": "120203",
            "name": "山海关区",
            "level": "3",
            "parent_id": "1202"
        },
        {
            "id": "120204",
            "name": "北戴河区",
            "level": "3",
            "parent_id": "1202"
        },
        {
            "id": "120205",
            "name": "青龙县",
            "level": "3",
            "parent_id": "1202"
        },
        {
            "id": "120206",
            "name": "昌黎县",
            "level": "3",
            "parent_id": "1202"
        },
        {
            "id": "120207",
            "name": "抚宁县",
            "level": "3",
            "parent_id": "1202"
        },
        {
            "id": "120208",
            "name": "卢龙县",
            "level": "3",
            "parent_id": "1202"
        },
        {
            "id": "120209",
            "name": "开发区",
            "level": "3",
            "parent_id": "1202"
        },
        {
            "id": "120302",
            "name": "路南区",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120303",
            "name": "路北区",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120304",
            "name": "古冶区",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120305",
            "name": "开平区",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120306",
            "name": "丰南区",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120307",
            "name": "丰润区",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120308",
            "name": "滦县",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120309",
            "name": "滦南县",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120310",
            "name": "乐亭县",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120311",
            "name": "迁西县",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120312",
            "name": "玉田县",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120313",
            "name": "唐海县",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120314",
            "name": "遵化市",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120315",
            "name": "迁安市",
            "level": "3",
            "parent_id": "1203"
        },
        {
            "id": "120402",
            "name": "桥东区",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120403",
            "name": "桥西区",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120404",
            "name": "宣化区",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120405",
            "name": "下花园区",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120406",
            "name": "宣化县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120407",
            "name": "张北县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120408",
            "name": "康保县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120409",
            "name": "沽源县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120410",
            "name": "尚义县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120411",
            "name": "蔚县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120412",
            "name": "阳原县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120413",
            "name": "怀安县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120414",
            "name": "万全县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120415",
            "name": "怀来县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120416",
            "name": "涿鹿县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120417",
            "name": "赤城县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120418",
            "name": "崇礼县",
            "level": "3",
            "parent_id": "1204"
        },
        {
            "id": "120502",
            "name": "安次区",
            "level": "3",
            "parent_id": "1205"
        },
        {
            "id": "120503",
            "name": "广阳区",
            "level": "3",
            "parent_id": "1205"
        },
        {
            "id": "120504",
            "name": "固安县",
            "level": "3",
            "parent_id": "1205"
        },
        {
            "id": "120505",
            "name": "永清县",
            "level": "3",
            "parent_id": "1205"
        },
        {
            "id": "120506",
            "name": "香河县",
            "level": "3",
            "parent_id": "1205"
        },
        {
            "id": "120507",
            "name": "大城县",
            "level": "3",
            "parent_id": "1205"
        },
        {
            "id": "120508",
            "name": "文安县",
            "level": "3",
            "parent_id": "1205"
        },
        {
            "id": "120509",
            "name": "大厂县",
            "level": "3",
            "parent_id": "1205"
        },
        {
            "id": "120510",
            "name": "霸州市",
            "level": "3",
            "parent_id": "1205"
        },
        {
            "id": "120511",
            "name": "三河市",
            "level": "3",
            "parent_id": "1205"
        },
        {
            "id": "120512",
            "name": "开发区",
            "level": "3",
            "parent_id": "1205"
        },
        {
            "id": "120602",
            "name": "桃城区",
            "level": "3",
            "parent_id": "1206"
        },
        {
            "id": "120603",
            "name": "枣强县",
            "level": "3",
            "parent_id": "1206"
        },
        {
            "id": "120604",
            "name": "武邑县",
            "level": "3",
            "parent_id": "1206"
        },
        {
            "id": "120605",
            "name": "武强县",
            "level": "3",
            "parent_id": "1206"
        },
        {
            "id": "120606",
            "name": "饶阳县",
            "level": "3",
            "parent_id": "1206"
        },
        {
            "id": "120607",
            "name": "安平县",
            "level": "3",
            "parent_id": "1206"
        },
        {
            "id": "120608",
            "name": "故城县",
            "level": "3",
            "parent_id": "1206"
        },
        {
            "id": "120609",
            "name": "景县",
            "level": "3",
            "parent_id": "1206"
        },
        {
            "id": "120610",
            "name": "阜城县",
            "level": "3",
            "parent_id": "1206"
        },
        {
            "id": "120611",
            "name": "冀州市",
            "level": "3",
            "parent_id": "1206"
        },
        {
            "id": "120612",
            "name": "深州市",
            "level": "3",
            "parent_id": "1206"
        },
        {
            "id": "120701",
            "name": "新市区",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120702",
            "name": "北市区",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120703",
            "name": "南市区",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120705",
            "name": "满城县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120706",
            "name": "清苑县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120707",
            "name": "涞水县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120708",
            "name": "阜平县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120709",
            "name": "徐水县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120710",
            "name": "定兴县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120711",
            "name": "唐县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120712",
            "name": "高阳县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120713",
            "name": "容城县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120714",
            "name": "涞源县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120715",
            "name": "望都县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120716",
            "name": "安新县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120717",
            "name": "易县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120718",
            "name": "曲阳县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120719",
            "name": "蠡县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120720",
            "name": "顺平县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120721",
            "name": "博野县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120722",
            "name": "雄县",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120723",
            "name": "涿州市",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120724",
            "name": "定州市",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120725",
            "name": "安国市",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120726",
            "name": "高碑店市",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120727",
            "name": "高新区",
            "level": "3",
            "parent_id": "1207"
        },
        {
            "id": "120802",
            "name": "双桥区",
            "level": "3",
            "parent_id": "1208"
        },
        {
            "id": "120803",
            "name": "双滦区",
            "level": "3",
            "parent_id": "1208"
        },
        {
            "id": "120804",
            "name": "鹰手营子",
            "level": "3",
            "parent_id": "1208"
        },
        {
            "id": "120805",
            "name": "承德县",
            "level": "3",
            "parent_id": "1208"
        },
        {
            "id": "120806",
            "name": "兴隆县",
            "level": "3",
            "parent_id": "1208"
        },
        {
            "id": "120807",
            "name": "平泉县",
            "level": "3",
            "parent_id": "1208"
        },
        {
            "id": "120808",
            "name": "滦平县",
            "level": "3",
            "parent_id": "1208"
        },
        {
            "id": "120809",
            "name": "隆化县",
            "level": "3",
            "parent_id": "1208"
        },
        {
            "id": "120810",
            "name": "丰宁县",
            "level": "3",
            "parent_id": "1208"
        },
        {
            "id": "120811",
            "name": "宽城县",
            "level": "3",
            "parent_id": "1208"
        },
        {
            "id": "120812",
            "name": "围场县",
            "level": "3",
            "parent_id": "1208"
        },
        {
            "id": "120902",
            "name": "桥东区",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120903",
            "name": "桥西区",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120904",
            "name": "邢台县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120905",
            "name": "临城县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120906",
            "name": "内丘县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120907",
            "name": "柏乡县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120908",
            "name": "隆尧县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120909",
            "name": "任县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120910",
            "name": "南和县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120911",
            "name": "宁晋县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120912",
            "name": "巨鹿县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120913",
            "name": "新河县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120914",
            "name": "广宗县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120915",
            "name": "平乡县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120916",
            "name": "威县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120917",
            "name": "清河县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120918",
            "name": "临西县",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120919",
            "name": "南宫市",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "120920",
            "name": "沙河市",
            "level": "3",
            "parent_id": "1209"
        },
        {
            "id": "121002",
            "name": "新华区",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121003",
            "name": "运河区",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121004",
            "name": "沧县",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121005",
            "name": "青县",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121006",
            "name": "东光县",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121007",
            "name": "海兴县",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121008",
            "name": "盐山县",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121009",
            "name": "肃宁县",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121010",
            "name": "南皮县",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121011",
            "name": "吴桥县",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121012",
            "name": "献县",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121013",
            "name": "孟村县",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121014",
            "name": "泊头市",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121015",
            "name": "任丘市",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121016",
            "name": "黄骅市",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121017",
            "name": "河间市",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121018",
            "name": "开发区",
            "level": "3",
            "parent_id": "1210"
        },
        {
            "id": "121102",
            "name": "邯山区",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121103",
            "name": "丛台区",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121104",
            "name": "复兴区",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121105",
            "name": "峰峰矿区",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121106",
            "name": "邯郸县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121107",
            "name": "临漳县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121108",
            "name": "成安县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121109",
            "name": "大名县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121110",
            "name": "涉县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121111",
            "name": "磁县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121112",
            "name": "肥乡县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121113",
            "name": "永年县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121114",
            "name": "邱县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121115",
            "name": "鸡泽县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121116",
            "name": "广平县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121117",
            "name": "馆陶县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121118",
            "name": "魏县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121119",
            "name": "曲周县",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "121120",
            "name": "武安市",
            "level": "3",
            "parent_id": "1211"
        },
        {
            "id": "130102",
            "name": "新城区",
            "level": "3",
            "parent_id": "1301"
        },
        {
            "id": "130103",
            "name": "回民区",
            "level": "3",
            "parent_id": "1301"
        },
        {
            "id": "130104",
            "name": "玉泉区",
            "level": "3",
            "parent_id": "1301"
        },
        {
            "id": "130105",
            "name": "赛罕区",
            "level": "3",
            "parent_id": "1301"
        },
        {
            "id": "130106",
            "name": "土默特左旗",
            "level": "3",
            "parent_id": "1301"
        },
        {
            "id": "130107",
            "name": "托克托县",
            "level": "3",
            "parent_id": "1301"
        },
        {
            "id": "130108",
            "name": "和林格尔县",
            "level": "3",
            "parent_id": "1301"
        },
        {
            "id": "130109",
            "name": "清水河县",
            "level": "3",
            "parent_id": "1301"
        },
        {
            "id": "130110",
            "name": "武川县",
            "level": "3",
            "parent_id": "1301"
        },
        {
            "id": "130111",
            "name": "开发区",
            "level": "3",
            "parent_id": "1301"
        },
        {
            "id": "130202",
            "name": "东河区",
            "level": "3",
            "parent_id": "1302"
        },
        {
            "id": "130203",
            "name": "昆都仑区",
            "level": "3",
            "parent_id": "1302"
        },
        {
            "id": "130204",
            "name": "青山区",
            "level": "3",
            "parent_id": "1302"
        },
        {
            "id": "130205",
            "name": "石拐区",
            "level": "3",
            "parent_id": "1302"
        },
        {
            "id": "130206",
            "name": "白云鄂博",
            "level": "3",
            "parent_id": "1302"
        },
        {
            "id": "130207",
            "name": "九原区",
            "level": "3",
            "parent_id": "1302"
        },
        {
            "id": "130208",
            "name": "土默特右旗",
            "level": "3",
            "parent_id": "1302"
        },
        {
            "id": "130209",
            "name": "固阳县",
            "level": "3",
            "parent_id": "1302"
        },
        {
            "id": "130210",
            "name": "达茂联合旗",
            "level": "3",
            "parent_id": "1302"
        },
        {
            "id": "130211",
            "name": "高新区",
            "level": "3",
            "parent_id": "1302"
        },
        {
            "id": "130302",
            "name": "海拉尔区",
            "level": "3",
            "parent_id": "1303"
        },
        {
            "id": "130303",
            "name": "阿荣旗",
            "level": "3",
            "parent_id": "1303"
        },
        {
            "id": "130304",
            "name": "莫旗",
            "level": "3",
            "parent_id": "1303"
        },
        {
            "id": "130305",
            "name": "鄂伦春自治旗",
            "level": "3",
            "parent_id": "1303"
        },
        {
            "id": "130306",
            "name": "鄂温克旗",
            "level": "3",
            "parent_id": "1303"
        },
        {
            "id": "130307",
            "name": "陈巴尔虎旗",
            "level": "3",
            "parent_id": "1303"
        },
        {
            "id": "130308",
            "name": "新巴尔虎左旗",
            "level": "3",
            "parent_id": "1303"
        },
        {
            "id": "130309",
            "name": "新巴尔虎右旗",
            "level": "3",
            "parent_id": "1303"
        },
        {
            "id": "130311",
            "name": "牙克石市",
            "level": "3",
            "parent_id": "1303"
        },
        {
            "id": "130312",
            "name": "扎兰屯市",
            "level": "3",
            "parent_id": "1303"
        },
        {
            "id": "130313",
            "name": "额尔古纳市",
            "level": "3",
            "parent_id": "1303"
        },
        {
            "id": "130314",
            "name": "根河市",
            "level": "3",
            "parent_id": "1303"
        },
        {
            "id": "130401",
            "name": "乌兰浩特市",
            "level": "3",
            "parent_id": "1304"
        },
        {
            "id": "130402",
            "name": "阿尔山市",
            "level": "3",
            "parent_id": "1304"
        },
        {
            "id": "130403",
            "name": "科右前旗",
            "level": "3",
            "parent_id": "1304"
        },
        {
            "id": "130404",
            "name": "科右中旗",
            "level": "3",
            "parent_id": "1304"
        },
        {
            "id": "130405",
            "name": "扎赉特旗",
            "level": "3",
            "parent_id": "1304"
        },
        {
            "id": "130406",
            "name": "突泉县",
            "level": "3",
            "parent_id": "1304"
        },
        {
            "id": "130502",
            "name": "科尔沁区",
            "level": "3",
            "parent_id": "1305"
        },
        {
            "id": "130503",
            "name": "科左中旗",
            "level": "3",
            "parent_id": "1305"
        },
        {
            "id": "130504",
            "name": "科左后旗",
            "level": "3",
            "parent_id": "1305"
        },
        {
            "id": "130505",
            "name": "开鲁县",
            "level": "3",
            "parent_id": "1305"
        },
        {
            "id": "130506",
            "name": "库伦旗",
            "level": "3",
            "parent_id": "1305"
        },
        {
            "id": "130507",
            "name": "奈曼旗",
            "level": "3",
            "parent_id": "1305"
        },
        {
            "id": "130508",
            "name": "扎鲁特旗",
            "level": "3",
            "parent_id": "1305"
        },
        {
            "id": "130509",
            "name": "霍林郭勒市",
            "level": "3",
            "parent_id": "1305"
        },
        {
            "id": "130602",
            "name": "红山区",
            "level": "3",
            "parent_id": "1306"
        },
        {
            "id": "130603",
            "name": "元宝山区",
            "level": "3",
            "parent_id": "1306"
        },
        {
            "id": "130604",
            "name": "松山区",
            "level": "3",
            "parent_id": "1306"
        },
        {
            "id": "130605",
            "name": "阿鲁科尔沁旗",
            "level": "3",
            "parent_id": "1306"
        },
        {
            "id": "130606",
            "name": "巴林左旗",
            "level": "3",
            "parent_id": "1306"
        },
        {
            "id": "130607",
            "name": "巴林右旗",
            "level": "3",
            "parent_id": "1306"
        },
        {
            "id": "130608",
            "name": "林西县",
            "level": "3",
            "parent_id": "1306"
        },
        {
            "id": "130609",
            "name": "克什克腾旗",
            "level": "3",
            "parent_id": "1306"
        },
        {
            "id": "130610",
            "name": "翁牛特旗",
            "level": "3",
            "parent_id": "1306"
        },
        {
            "id": "130611",
            "name": "喀喇沁旗",
            "level": "3",
            "parent_id": "1306"
        },
        {
            "id": "130612",
            "name": "宁城县",
            "level": "3",
            "parent_id": "1306"
        },
        {
            "id": "130613",
            "name": "敖汉旗",
            "level": "3",
            "parent_id": "1306"
        },
        {
            "id": "130702",
            "name": "锡林浩特市",
            "level": "3",
            "parent_id": "1307"
        },
        {
            "id": "130703",
            "name": "阿巴嘎旗",
            "level": "3",
            "parent_id": "1307"
        },
        {
            "id": "130704",
            "name": "苏尼特左旗",
            "level": "3",
            "parent_id": "1307"
        },
        {
            "id": "130705",
            "name": "苏尼特右旗",
            "level": "3",
            "parent_id": "1307"
        },
        {
            "id": "130706",
            "name": "东乌珠穆沁旗",
            "level": "3",
            "parent_id": "1307"
        },
        {
            "id": "130707",
            "name": "西乌珠穆沁旗",
            "level": "3",
            "parent_id": "1307"
        },
        {
            "id": "130708",
            "name": "太仆寺旗",
            "level": "3",
            "parent_id": "1307"
        },
        {
            "id": "130709",
            "name": "镶黄旗",
            "level": "3",
            "parent_id": "1307"
        },
        {
            "id": "130710",
            "name": "正镶白旗",
            "level": "3",
            "parent_id": "1307"
        },
        {
            "id": "130711",
            "name": "正蓝旗",
            "level": "3",
            "parent_id": "1307"
        },
        {
            "id": "130712",
            "name": "多伦县",
            "level": "3",
            "parent_id": "1307"
        },
        {
            "id": "130802",
            "name": "集宁区",
            "level": "3",
            "parent_id": "1308"
        },
        {
            "id": "130803",
            "name": "卓资县",
            "level": "3",
            "parent_id": "1308"
        },
        {
            "id": "130804",
            "name": "化德县",
            "level": "3",
            "parent_id": "1308"
        },
        {
            "id": "130805",
            "name": "商都县",
            "level": "3",
            "parent_id": "1308"
        },
        {
            "id": "130806",
            "name": "兴和县",
            "level": "3",
            "parent_id": "1308"
        },
        {
            "id": "130807",
            "name": "凉城县",
            "level": "3",
            "parent_id": "1308"
        },
        {
            "id": "130808",
            "name": "察右前旗",
            "level": "3",
            "parent_id": "1308"
        },
        {
            "id": "130809",
            "name": "察右中旗",
            "level": "3",
            "parent_id": "1308"
        },
        {
            "id": "130810",
            "name": "察右后旗",
            "level": "3",
            "parent_id": "1308"
        },
        {
            "id": "130811",
            "name": "四子王旗",
            "level": "3",
            "parent_id": "1308"
        },
        {
            "id": "130812",
            "name": "丰镇市",
            "level": "3",
            "parent_id": "1308"
        },
        {
            "id": "130902",
            "name": "东胜区",
            "level": "3",
            "parent_id": "1309"
        },
        {
            "id": "130903",
            "name": "达拉特旗",
            "level": "3",
            "parent_id": "1309"
        },
        {
            "id": "130904",
            "name": "准格尔旗",
            "level": "3",
            "parent_id": "1309"
        },
        {
            "id": "130905",
            "name": "鄂托克前旗",
            "level": "3",
            "parent_id": "1309"
        },
        {
            "id": "130906",
            "name": "鄂托克旗",
            "level": "3",
            "parent_id": "1309"
        },
        {
            "id": "130907",
            "name": "杭锦旗",
            "level": "3",
            "parent_id": "1309"
        },
        {
            "id": "130908",
            "name": "乌审旗",
            "level": "3",
            "parent_id": "1309"
        },
        {
            "id": "130909",
            "name": "伊金霍洛旗",
            "level": "3",
            "parent_id": "1309"
        },
        {
            "id": "131002",
            "name": "临河区",
            "level": "3",
            "parent_id": "1310"
        },
        {
            "id": "131003",
            "name": "五原县",
            "level": "3",
            "parent_id": "1310"
        },
        {
            "id": "131004",
            "name": "磴口县",
            "level": "3",
            "parent_id": "1310"
        },
        {
            "id": "131005",
            "name": "乌拉特前旗",
            "level": "3",
            "parent_id": "1310"
        },
        {
            "id": "131006",
            "name": "乌拉特中旗",
            "level": "3",
            "parent_id": "1310"
        },
        {
            "id": "131007",
            "name": "乌拉特后旗",
            "level": "3",
            "parent_id": "1310"
        },
        {
            "id": "131008",
            "name": "杭锦后旗",
            "level": "3",
            "parent_id": "1310"
        },
        {
            "id": "131102",
            "name": "海勃湾区",
            "level": "3",
            "parent_id": "1311"
        },
        {
            "id": "131103",
            "name": "海南区",
            "level": "3",
            "parent_id": "1311"
        },
        {
            "id": "131104",
            "name": "乌达区",
            "level": "3",
            "parent_id": "1311"
        },
        {
            "id": "131201",
            "name": "阿拉善左旗",
            "level": "3",
            "parent_id": "1312"
        },
        {
            "id": "131202",
            "name": "阿拉善右旗",
            "level": "3",
            "parent_id": "1312"
        },
        {
            "id": "131203",
            "name": "额济纳旗",
            "level": "3",
            "parent_id": "1312"
        },
        {
            "id": "140102",
            "name": "小店区",
            "level": "3",
            "parent_id": "1401"
        },
        {
            "id": "140103",
            "name": "迎泽区",
            "level": "3",
            "parent_id": "1401"
        },
        {
            "id": "140104",
            "name": "杏花岭区",
            "level": "3",
            "parent_id": "1401"
        },
        {
            "id": "140105",
            "name": "尖草坪区",
            "level": "3",
            "parent_id": "1401"
        },
        {
            "id": "140106",
            "name": "万柏林区",
            "level": "3",
            "parent_id": "1401"
        },
        {
            "id": "140107",
            "name": "晋源区",
            "level": "3",
            "parent_id": "1401"
        },
        {
            "id": "140108",
            "name": "清徐县",
            "level": "3",
            "parent_id": "1401"
        },
        {
            "id": "140109",
            "name": "阳曲县",
            "level": "3",
            "parent_id": "1401"
        },
        {
            "id": "140110",
            "name": "娄烦县",
            "level": "3",
            "parent_id": "1401"
        },
        {
            "id": "140111",
            "name": "古交市",
            "level": "3",
            "parent_id": "1401"
        },
        {
            "id": "140112",
            "name": "开发区",
            "level": "3",
            "parent_id": "1401"
        },
        {
            "id": "140202",
            "name": "城区",
            "level": "3",
            "parent_id": "1402"
        },
        {
            "id": "140203",
            "name": "矿区",
            "level": "3",
            "parent_id": "1402"
        },
        {
            "id": "140204",
            "name": "南郊区",
            "level": "3",
            "parent_id": "1402"
        },
        {
            "id": "140205",
            "name": "新荣区",
            "level": "3",
            "parent_id": "1402"
        },
        {
            "id": "140206",
            "name": "阳高县",
            "level": "3",
            "parent_id": "1402"
        },
        {
            "id": "140207",
            "name": "天镇县",
            "level": "3",
            "parent_id": "1402"
        },
        {
            "id": "140208",
            "name": "广灵县",
            "level": "3",
            "parent_id": "1402"
        },
        {
            "id": "140209",
            "name": "灵丘县",
            "level": "3",
            "parent_id": "1402"
        },
        {
            "id": "140210",
            "name": "浑源县",
            "level": "3",
            "parent_id": "1402"
        },
        {
            "id": "140211",
            "name": "左云县",
            "level": "3",
            "parent_id": "1402"
        },
        {
            "id": "140212",
            "name": "大同县",
            "level": "3",
            "parent_id": "1402"
        },
        {
            "id": "140213",
            "name": "开发区",
            "level": "3",
            "parent_id": "1402"
        },
        {
            "id": "140302",
            "name": "城区",
            "level": "3",
            "parent_id": "1403"
        },
        {
            "id": "140303",
            "name": "矿区",
            "level": "3",
            "parent_id": "1403"
        },
        {
            "id": "140304",
            "name": "郊区",
            "level": "3",
            "parent_id": "1403"
        },
        {
            "id": "140305",
            "name": "平定县",
            "level": "3",
            "parent_id": "1403"
        },
        {
            "id": "140306",
            "name": "盂县",
            "level": "3",
            "parent_id": "1403"
        },
        {
            "id": "140402",
            "name": "城区",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140403",
            "name": "郊区",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140404",
            "name": "长治县",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140405",
            "name": "襄垣县",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140406",
            "name": "屯留县",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140407",
            "name": "平顺县",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140408",
            "name": "黎城县",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140409",
            "name": "壶关县",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140410",
            "name": "长子县",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140411",
            "name": "武乡县",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140412",
            "name": "沁县",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140413",
            "name": "沁源县",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140414",
            "name": "潞城市",
            "level": "3",
            "parent_id": "1404"
        },
        {
            "id": "140502",
            "name": "城区",
            "level": "3",
            "parent_id": "1405"
        },
        {
            "id": "140503",
            "name": "沁水县",
            "level": "3",
            "parent_id": "1405"
        },
        {
            "id": "140504",
            "name": "阳城县",
            "level": "3",
            "parent_id": "1405"
        },
        {
            "id": "140505",
            "name": "陵川县",
            "level": "3",
            "parent_id": "1405"
        },
        {
            "id": "140506",
            "name": "泽州县",
            "level": "3",
            "parent_id": "1405"
        },
        {
            "id": "140507",
            "name": "高平市",
            "level": "3",
            "parent_id": "1405"
        },
        {
            "id": "140602",
            "name": "朔城区",
            "level": "3",
            "parent_id": "1406"
        },
        {
            "id": "140603",
            "name": "平鲁区",
            "level": "3",
            "parent_id": "1406"
        },
        {
            "id": "140604",
            "name": "山阴县",
            "level": "3",
            "parent_id": "1406"
        },
        {
            "id": "140605",
            "name": "应县",
            "level": "3",
            "parent_id": "1406"
        },
        {
            "id": "140606",
            "name": "右玉县",
            "level": "3",
            "parent_id": "1406"
        },
        {
            "id": "140607",
            "name": "怀仁县",
            "level": "3",
            "parent_id": "1406"
        },
        {
            "id": "140702",
            "name": "忻府区",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140703",
            "name": "定襄县",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140704",
            "name": "五台县",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140705",
            "name": "代县",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140706",
            "name": "繁峙县",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140707",
            "name": "宁武县",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140708",
            "name": "静乐县",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140709",
            "name": "神池县",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140710",
            "name": "五寨县",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140711",
            "name": "岢岚县",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140712",
            "name": "河曲县",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140713",
            "name": "保德县",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140714",
            "name": "偏关县",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140715",
            "name": "原平市",
            "level": "3",
            "parent_id": "1407"
        },
        {
            "id": "140802",
            "name": "榆次区",
            "level": "3",
            "parent_id": "1408"
        },
        {
            "id": "140803",
            "name": "榆社县",
            "level": "3",
            "parent_id": "1408"
        },
        {
            "id": "140804",
            "name": "左权县",
            "level": "3",
            "parent_id": "1408"
        },
        {
            "id": "140805",
            "name": "和顺县",
            "level": "3",
            "parent_id": "1408"
        },
        {
            "id": "140806",
            "name": "昔阳县",
            "level": "3",
            "parent_id": "1408"
        },
        {
            "id": "140807",
            "name": "寿阳县",
            "level": "3",
            "parent_id": "1408"
        },
        {
            "id": "140808",
            "name": "太谷县",
            "level": "3",
            "parent_id": "1408"
        },
        {
            "id": "140809",
            "name": "祁县",
            "level": "3",
            "parent_id": "1408"
        },
        {
            "id": "140810",
            "name": "平遥县",
            "level": "3",
            "parent_id": "1408"
        },
        {
            "id": "140811",
            "name": "灵石县",
            "level": "3",
            "parent_id": "1408"
        },
        {
            "id": "140812",
            "name": "介休市",
            "level": "3",
            "parent_id": "1408"
        },
        {
            "id": "140902",
            "name": "尧都区",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140903",
            "name": "曲沃县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140904",
            "name": "翼城县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140905",
            "name": "襄汾县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140906",
            "name": "洪洞县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140907",
            "name": "古县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140908",
            "name": "安泽县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140909",
            "name": "浮山县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140910",
            "name": "吉县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140911",
            "name": "乡宁县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140912",
            "name": "大宁县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140913",
            "name": "隰县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140914",
            "name": "永和县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140915",
            "name": "蒲县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140916",
            "name": "汾西县",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140917",
            "name": "侯马市",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "140918",
            "name": "霍州市",
            "level": "3",
            "parent_id": "1409"
        },
        {
            "id": "141002",
            "name": "离石区",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141003",
            "name": "文水县",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141004",
            "name": "交城县",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141005",
            "name": "兴县",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141006",
            "name": "临县",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141007",
            "name": "柳林县",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141008",
            "name": "石楼县",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141009",
            "name": "岚县",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141010",
            "name": "方山县",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141011",
            "name": "中阳县",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141012",
            "name": "交口县",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141013",
            "name": "孝义市",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141014",
            "name": "汾阳市",
            "level": "3",
            "parent_id": "1410"
        },
        {
            "id": "141102",
            "name": "盐湖区",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "141103",
            "name": "临猗县",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "141104",
            "name": "万荣县",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "141105",
            "name": "闻喜县",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "141106",
            "name": "稷山县",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "141107",
            "name": "新绛县",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "141108",
            "name": "绛县",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "141109",
            "name": "垣曲县",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "141110",
            "name": "夏县",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "141111",
            "name": "平陆县",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "141112",
            "name": "芮城县",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "141113",
            "name": "永济市",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "141114",
            "name": "河津市",
            "level": "3",
            "parent_id": "1411"
        },
        {
            "id": "200102",
            "name": "和平区",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200103",
            "name": "沈河区",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200104",
            "name": "大东区",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200105",
            "name": "皇姑区",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200106",
            "name": "铁西区",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200107",
            "name": "苏家屯区",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200108",
            "name": "东陵区",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200109",
            "name": "沈北新区",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200110",
            "name": "于洪区",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200111",
            "name": "辽中县",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200112",
            "name": "康平县",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200113",
            "name": "法库县",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200114",
            "name": "新民市",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200115",
            "name": "浑南新区",
            "level": "3",
            "parent_id": "2001"
        },
        {
            "id": "200202",
            "name": "中山区",
            "level": "3",
            "parent_id": "2002"
        },
        {
            "id": "200203",
            "name": "西岗区",
            "level": "3",
            "parent_id": "2002"
        },
        {
            "id": "200204",
            "name": "沙河口区",
            "level": "3",
            "parent_id": "2002"
        },
        {
            "id": "200205",
            "name": "甘井子区",
            "level": "3",
            "parent_id": "2002"
        },
        {
            "id": "200206",
            "name": "旅顺口区",
            "level": "3",
            "parent_id": "2002"
        },
        {
            "id": "200207",
            "name": "金州区",
            "level": "3",
            "parent_id": "2002"
        },
        {
            "id": "200208",
            "name": "长海县",
            "level": "3",
            "parent_id": "2002"
        },
        {
            "id": "200209",
            "name": "瓦房店市",
            "level": "3",
            "parent_id": "2002"
        },
        {
            "id": "200210",
            "name": "普兰店市",
            "level": "3",
            "parent_id": "2002"
        },
        {
            "id": "200211",
            "name": "庄河市",
            "level": "3",
            "parent_id": "2002"
        },
        {
            "id": "200212",
            "name": "开发区",
            "level": "3",
            "parent_id": "2002"
        },
        {
            "id": "200302",
            "name": "铁东区",
            "level": "3",
            "parent_id": "2003"
        },
        {
            "id": "200303",
            "name": "铁西区",
            "level": "3",
            "parent_id": "2003"
        },
        {
            "id": "200304",
            "name": "立山区",
            "level": "3",
            "parent_id": "2003"
        },
        {
            "id": "200305",
            "name": "千山区",
            "level": "3",
            "parent_id": "2003"
        },
        {
            "id": "200306",
            "name": "台安县",
            "level": "3",
            "parent_id": "2003"
        },
        {
            "id": "200307",
            "name": "岫岩县",
            "level": "3",
            "parent_id": "2003"
        },
        {
            "id": "200308",
            "name": "海城市",
            "level": "3",
            "parent_id": "2003"
        },
        {
            "id": "200309",
            "name": "高新区",
            "level": "3",
            "parent_id": "2003"
        },
        {
            "id": "200402",
            "name": "古塔区",
            "level": "3",
            "parent_id": "2004"
        },
        {
            "id": "200403",
            "name": "凌河区",
            "level": "3",
            "parent_id": "2004"
        },
        {
            "id": "200404",
            "name": "太和区",
            "level": "3",
            "parent_id": "2004"
        },
        {
            "id": "200405",
            "name": "黑山县",
            "level": "3",
            "parent_id": "2004"
        },
        {
            "id": "200406",
            "name": "义县",
            "level": "3",
            "parent_id": "2004"
        },
        {
            "id": "200407",
            "name": "凌海市",
            "level": "3",
            "parent_id": "2004"
        },
        {
            "id": "200408",
            "name": "北镇市",
            "level": "3",
            "parent_id": "2004"
        },
        {
            "id": "200409",
            "name": "开发区",
            "level": "3",
            "parent_id": "2004"
        },
        {
            "id": "200502",
            "name": "元宝区",
            "level": "3",
            "parent_id": "2005"
        },
        {
            "id": "200503",
            "name": "振兴区",
            "level": "3",
            "parent_id": "2005"
        },
        {
            "id": "200504",
            "name": "振安区",
            "level": "3",
            "parent_id": "2005"
        },
        {
            "id": "200505",
            "name": "宽甸县",
            "level": "3",
            "parent_id": "2005"
        },
        {
            "id": "200506",
            "name": "东港市",
            "level": "3",
            "parent_id": "2005"
        },
        {
            "id": "200507",
            "name": "凤城市",
            "level": "3",
            "parent_id": "2005"
        },
        {
            "id": "200602",
            "name": "双台子区",
            "level": "3",
            "parent_id": "2006"
        },
        {
            "id": "200603",
            "name": "兴隆台区",
            "level": "3",
            "parent_id": "2006"
        },
        {
            "id": "200604",
            "name": "大洼县",
            "level": "3",
            "parent_id": "2006"
        },
        {
            "id": "200605",
            "name": "盘山县",
            "level": "3",
            "parent_id": "2006"
        },
        {
            "id": "200702",
            "name": "银州区",
            "level": "3",
            "parent_id": "2007"
        },
        {
            "id": "200703",
            "name": "清河区",
            "level": "3",
            "parent_id": "2007"
        },
        {
            "id": "200704",
            "name": "铁岭县",
            "level": "3",
            "parent_id": "2007"
        },
        {
            "id": "200705",
            "name": "西丰县",
            "level": "3",
            "parent_id": "2007"
        },
        {
            "id": "200706",
            "name": "昌图县",
            "level": "3",
            "parent_id": "2007"
        },
        {
            "id": "200707",
            "name": "调兵山市",
            "level": "3",
            "parent_id": "2007"
        },
        {
            "id": "200708",
            "name": "开原市",
            "level": "3",
            "parent_id": "2007"
        },
        {
            "id": "200802",
            "name": "新抚区",
            "level": "3",
            "parent_id": "2008"
        },
        {
            "id": "200803",
            "name": "东洲区",
            "level": "3",
            "parent_id": "2008"
        },
        {
            "id": "200804",
            "name": "望花区",
            "level": "3",
            "parent_id": "2008"
        },
        {
            "id": "200805",
            "name": "顺城区",
            "level": "3",
            "parent_id": "2008"
        },
        {
            "id": "200806",
            "name": "抚顺县",
            "level": "3",
            "parent_id": "2008"
        },
        {
            "id": "200807",
            "name": "新宾县",
            "level": "3",
            "parent_id": "2008"
        },
        {
            "id": "200808",
            "name": "清原县",
            "level": "3",
            "parent_id": "2008"
        },
        {
            "id": "200902",
            "name": "站前区",
            "level": "3",
            "parent_id": "2009"
        },
        {
            "id": "200904",
            "name": "鲅鱼圈区",
            "level": "3",
            "parent_id": "2009"
        },
        {
            "id": "200905",
            "name": "老边区",
            "level": "3",
            "parent_id": "2009"
        },
        {
            "id": "200906",
            "name": "盖州市",
            "level": "3",
            "parent_id": "2009"
        },
        {
            "id": "200907",
            "name": "大石桥市",
            "level": "3",
            "parent_id": "2009"
        },
        {
            "id": "200908",
            "name": "开发区",
            "level": "3",
            "parent_id": "2009"
        },
        {
            "id": "201002",
            "name": "白塔区",
            "level": "3",
            "parent_id": "2010"
        },
        {
            "id": "201003",
            "name": "文圣区",
            "level": "3",
            "parent_id": "2010"
        },
        {
            "id": "201004",
            "name": "宏伟区",
            "level": "3",
            "parent_id": "2010"
        },
        {
            "id": "201005",
            "name": "弓长岭区",
            "level": "3",
            "parent_id": "2010"
        },
        {
            "id": "201006",
            "name": "太子河区",
            "level": "3",
            "parent_id": "2010"
        },
        {
            "id": "201007",
            "name": "辽阳县",
            "level": "3",
            "parent_id": "2010"
        },
        {
            "id": "201008",
            "name": "灯塔市",
            "level": "3",
            "parent_id": "2010"
        },
        {
            "id": "201009",
            "name": "高新区",
            "level": "3",
            "parent_id": "2010"
        },
        {
            "id": "201102",
            "name": "海州区",
            "level": "3",
            "parent_id": "2011"
        },
        {
            "id": "201103",
            "name": "新邱区",
            "level": "3",
            "parent_id": "2011"
        },
        {
            "id": "201104",
            "name": "太平区",
            "level": "3",
            "parent_id": "2011"
        },
        {
            "id": "201105",
            "name": "清河门区",
            "level": "3",
            "parent_id": "2011"
        },
        {
            "id": "201106",
            "name": "细河区",
            "level": "3",
            "parent_id": "2011"
        },
        {
            "id": "201107",
            "name": "阜新县",
            "level": "3",
            "parent_id": "2011"
        },
        {
            "id": "201108",
            "name": "彰武县",
            "level": "3",
            "parent_id": "2011"
        },
        {
            "id": "201202",
            "name": "平山区",
            "level": "3",
            "parent_id": "2012"
        },
        {
            "id": "201203",
            "name": "溪湖区",
            "level": "3",
            "parent_id": "2012"
        },
        {
            "id": "201204",
            "name": "明山区",
            "level": "3",
            "parent_id": "2012"
        },
        {
            "id": "201205",
            "name": "南芬区",
            "level": "3",
            "parent_id": "2012"
        },
        {
            "id": "201206",
            "name": "本溪县",
            "level": "3",
            "parent_id": "2012"
        },
        {
            "id": "201207",
            "name": "桓仁县",
            "level": "3",
            "parent_id": "2012"
        },
        {
            "id": "201302",
            "name": "双塔区",
            "level": "3",
            "parent_id": "2013"
        },
        {
            "id": "201303",
            "name": "龙城区",
            "level": "3",
            "parent_id": "2013"
        },
        {
            "id": "201304",
            "name": "朝阳县",
            "level": "3",
            "parent_id": "2013"
        },
        {
            "id": "201305",
            "name": "建平县",
            "level": "3",
            "parent_id": "2013"
        },
        {
            "id": "201306",
            "name": "喀左县",
            "level": "3",
            "parent_id": "2013"
        },
        {
            "id": "201307",
            "name": "北票市",
            "level": "3",
            "parent_id": "2013"
        },
        {
            "id": "201308",
            "name": "凌源市",
            "level": "3",
            "parent_id": "2013"
        },
        {
            "id": "201402",
            "name": "连山区",
            "level": "3",
            "parent_id": "2014"
        },
        {
            "id": "201403",
            "name": "龙港区",
            "level": "3",
            "parent_id": "2014"
        },
        {
            "id": "201404",
            "name": "南票区",
            "level": "3",
            "parent_id": "2014"
        },
        {
            "id": "201405",
            "name": "绥中县",
            "level": "3",
            "parent_id": "2014"
        },
        {
            "id": "201406",
            "name": "建昌县",
            "level": "3",
            "parent_id": "2014"
        },
        {
            "id": "201407",
            "name": "兴城市",
            "level": "3",
            "parent_id": "2014"
        },
        {
            "id": "210102",
            "name": "南关区",
            "level": "3",
            "parent_id": "2101"
        },
        {
            "id": "210103",
            "name": "宽城区",
            "level": "3",
            "parent_id": "2101"
        },
        {
            "id": "210104",
            "name": "朝阳区",
            "level": "3",
            "parent_id": "2101"
        },
        {
            "id": "210105",
            "name": "二道区",
            "level": "3",
            "parent_id": "2101"
        },
        {
            "id": "210106",
            "name": "绿园区",
            "level": "3",
            "parent_id": "2101"
        },
        {
            "id": "210107",
            "name": "双阳区",
            "level": "3",
            "parent_id": "2101"
        },
        {
            "id": "210108",
            "name": "农安县",
            "level": "3",
            "parent_id": "2101"
        },
        {
            "id": "210109",
            "name": "九台市",
            "level": "3",
            "parent_id": "2101"
        },
        {
            "id": "210110",
            "name": "榆树市",
            "level": "3",
            "parent_id": "2101"
        },
        {
            "id": "210111",
            "name": "德惠市",
            "level": "3",
            "parent_id": "2101"
        },
        {
            "id": "210112",
            "name": "开发区",
            "level": "3",
            "parent_id": "2101"
        },
        {
            "id": "210202",
            "name": "昌邑区",
            "level": "3",
            "parent_id": "2102"
        },
        {
            "id": "210203",
            "name": "龙潭区",
            "level": "3",
            "parent_id": "2102"
        },
        {
            "id": "210204",
            "name": "船营区",
            "level": "3",
            "parent_id": "2102"
        },
        {
            "id": "210205",
            "name": "丰满区",
            "level": "3",
            "parent_id": "2102"
        },
        {
            "id": "210206",
            "name": "永吉县",
            "level": "3",
            "parent_id": "2102"
        },
        {
            "id": "210207",
            "name": "蛟河市",
            "level": "3",
            "parent_id": "2102"
        },
        {
            "id": "210208",
            "name": "桦甸市",
            "level": "3",
            "parent_id": "2102"
        },
        {
            "id": "210209",
            "name": "舒兰市",
            "level": "3",
            "parent_id": "2102"
        },
        {
            "id": "210210",
            "name": "磐石市",
            "level": "3",
            "parent_id": "2102"
        },
        {
            "id": "210211",
            "name": "开发区",
            "level": "3",
            "parent_id": "2102"
        },
        {
            "id": "210302",
            "name": "铁西区",
            "level": "3",
            "parent_id": "2103"
        },
        {
            "id": "210303",
            "name": "铁东区",
            "level": "3",
            "parent_id": "2103"
        },
        {
            "id": "210304",
            "name": "梨树县",
            "level": "3",
            "parent_id": "2103"
        },
        {
            "id": "210305",
            "name": "伊通县",
            "level": "3",
            "parent_id": "2103"
        },
        {
            "id": "210306",
            "name": "公主岭市",
            "level": "3",
            "parent_id": "2103"
        },
        {
            "id": "210307",
            "name": "双辽市",
            "level": "3",
            "parent_id": "2103"
        },
        {
            "id": "210308",
            "name": "开发区",
            "level": "3",
            "parent_id": "2103"
        },
        {
            "id": "210402",
            "name": "龙山区",
            "level": "3",
            "parent_id": "2104"
        },
        {
            "id": "210403",
            "name": "西安区",
            "level": "3",
            "parent_id": "2104"
        },
        {
            "id": "210404",
            "name": "东丰县",
            "level": "3",
            "parent_id": "2104"
        },
        {
            "id": "210405",
            "name": "东辽县",
            "level": "3",
            "parent_id": "2104"
        },
        {
            "id": "210502",
            "name": "东昌区",
            "level": "3",
            "parent_id": "2105"
        },
        {
            "id": "210503",
            "name": "二道江区",
            "level": "3",
            "parent_id": "2105"
        },
        {
            "id": "210504",
            "name": "通化县",
            "level": "3",
            "parent_id": "2105"
        },
        {
            "id": "210505",
            "name": "辉南县",
            "level": "3",
            "parent_id": "2105"
        },
        {
            "id": "210506",
            "name": "柳河县",
            "level": "3",
            "parent_id": "2105"
        },
        {
            "id": "210507",
            "name": "梅河口市",
            "level": "3",
            "parent_id": "2105"
        },
        {
            "id": "210508",
            "name": "集安市",
            "level": "3",
            "parent_id": "2105"
        },
        {
            "id": "210602",
            "name": "八道江区",
            "level": "3",
            "parent_id": "2106"
        },
        {
            "id": "210603",
            "name": "江源区",
            "level": "3",
            "parent_id": "2106"
        },
        {
            "id": "210604",
            "name": "抚松县",
            "level": "3",
            "parent_id": "2106"
        },
        {
            "id": "210605",
            "name": "靖宇县",
            "level": "3",
            "parent_id": "2106"
        },
        {
            "id": "210606",
            "name": "长白县",
            "level": "3",
            "parent_id": "2106"
        },
        {
            "id": "210607",
            "name": "临江市",
            "level": "3",
            "parent_id": "2106"
        },
        {
            "id": "210702",
            "name": "宁江区",
            "level": "3",
            "parent_id": "2107"
        },
        {
            "id": "210703",
            "name": "前郭县",
            "level": "3",
            "parent_id": "2107"
        },
        {
            "id": "210704",
            "name": "长岭县",
            "level": "3",
            "parent_id": "2107"
        },
        {
            "id": "210705",
            "name": "乾安县",
            "level": "3",
            "parent_id": "2107"
        },
        {
            "id": "210706",
            "name": "扶余县",
            "level": "3",
            "parent_id": "2107"
        },
        {
            "id": "210802",
            "name": "洮北区",
            "level": "3",
            "parent_id": "2108"
        },
        {
            "id": "210803",
            "name": "镇赉县",
            "level": "3",
            "parent_id": "2108"
        },
        {
            "id": "210804",
            "name": "通榆县",
            "level": "3",
            "parent_id": "2108"
        },
        {
            "id": "210805",
            "name": "洮南市",
            "level": "3",
            "parent_id": "2108"
        },
        {
            "id": "210806",
            "name": "大安市",
            "level": "3",
            "parent_id": "2108"
        },
        {
            "id": "210901",
            "name": "延吉市",
            "level": "3",
            "parent_id": "2109"
        },
        {
            "id": "210902",
            "name": "图们市",
            "level": "3",
            "parent_id": "2109"
        },
        {
            "id": "210903",
            "name": "敦化市",
            "level": "3",
            "parent_id": "2109"
        },
        {
            "id": "210904",
            "name": "珲春市",
            "level": "3",
            "parent_id": "2109"
        },
        {
            "id": "210905",
            "name": "龙井市",
            "level": "3",
            "parent_id": "2109"
        },
        {
            "id": "210906",
            "name": "和龙市",
            "level": "3",
            "parent_id": "2109"
        },
        {
            "id": "210907",
            "name": "汪清县",
            "level": "3",
            "parent_id": "2109"
        },
        {
            "id": "210908",
            "name": "安图县",
            "level": "3",
            "parent_id": "2109"
        },
        {
            "id": "210909",
            "name": "高新区",
            "level": "3",
            "parent_id": "2109"
        },
        {
            "id": "220102",
            "name": "道里区",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220103",
            "name": "南岗区",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220104",
            "name": "道外区",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220105",
            "name": "平房区",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220106",
            "name": "松北区",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220107",
            "name": "香坊区",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220108",
            "name": "呼兰区",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220109",
            "name": "阿城区",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220110",
            "name": "依兰县",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220111",
            "name": "方正县",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220112",
            "name": "宾县",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220113",
            "name": "巴彦县",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220114",
            "name": "木兰县",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220115",
            "name": "通河县",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220116",
            "name": "延寿县",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220117",
            "name": "双城市",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220118",
            "name": "尚志市",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220119",
            "name": "五常市",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220120",
            "name": "开发区",
            "level": "3",
            "parent_id": "2201"
        },
        {
            "id": "220202",
            "name": "龙沙区",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220203",
            "name": "建华区",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220204",
            "name": "铁锋区",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220205",
            "name": "昂昂溪区",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220206",
            "name": "富拉尔基区",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220207",
            "name": "碾子山区",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220208",
            "name": "梅里斯区",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220209",
            "name": "龙江县",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220210",
            "name": "依安县",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220211",
            "name": "泰来县",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220212",
            "name": "甘南县",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220213",
            "name": "富裕县",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220214",
            "name": "克山县",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220215",
            "name": "克东县",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220216",
            "name": "拜泉县",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220217",
            "name": "讷河市",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220218",
            "name": "高新区",
            "level": "3",
            "parent_id": "2202"
        },
        {
            "id": "220302",
            "name": "鸡冠区",
            "level": "3",
            "parent_id": "2203"
        },
        {
            "id": "220303",
            "name": "恒山区",
            "level": "3",
            "parent_id": "2203"
        },
        {
            "id": "220304",
            "name": "滴道区",
            "level": "3",
            "parent_id": "2203"
        },
        {
            "id": "220305",
            "name": "梨树区",
            "level": "3",
            "parent_id": "2203"
        },
        {
            "id": "220306",
            "name": "城子河区",
            "level": "3",
            "parent_id": "2203"
        },
        {
            "id": "220307",
            "name": "麻山区",
            "level": "3",
            "parent_id": "2203"
        },
        {
            "id": "220308",
            "name": "鸡东县",
            "level": "3",
            "parent_id": "2203"
        },
        {
            "id": "220309",
            "name": "虎林市",
            "level": "3",
            "parent_id": "2203"
        },
        {
            "id": "220310",
            "name": "密山市",
            "level": "3",
            "parent_id": "2203"
        },
        {
            "id": "220402",
            "name": "向阳区",
            "level": "3",
            "parent_id": "2204"
        },
        {
            "id": "220403",
            "name": "工农区",
            "level": "3",
            "parent_id": "2204"
        },
        {
            "id": "220404",
            "name": "南山区",
            "level": "3",
            "parent_id": "2204"
        },
        {
            "id": "220405",
            "name": "兴安区",
            "level": "3",
            "parent_id": "2204"
        },
        {
            "id": "220406",
            "name": "东山区",
            "level": "3",
            "parent_id": "2204"
        },
        {
            "id": "220407",
            "name": "兴山区",
            "level": "3",
            "parent_id": "2204"
        },
        {
            "id": "220408",
            "name": "萝北县",
            "level": "3",
            "parent_id": "2204"
        },
        {
            "id": "220409",
            "name": "绥滨县",
            "level": "3",
            "parent_id": "2204"
        },
        {
            "id": "220502",
            "name": "尖山区",
            "level": "3",
            "parent_id": "2205"
        },
        {
            "id": "220503",
            "name": "岭东区",
            "level": "3",
            "parent_id": "2205"
        },
        {
            "id": "220504",
            "name": "四方台区",
            "level": "3",
            "parent_id": "2205"
        },
        {
            "id": "220505",
            "name": "宝山区",
            "level": "3",
            "parent_id": "2205"
        },
        {
            "id": "220506",
            "name": "集贤县",
            "level": "3",
            "parent_id": "2205"
        },
        {
            "id": "220507",
            "name": "友谊县",
            "level": "3",
            "parent_id": "2205"
        },
        {
            "id": "220508",
            "name": "宝清县",
            "level": "3",
            "parent_id": "2205"
        },
        {
            "id": "220509",
            "name": "饶河县",
            "level": "3",
            "parent_id": "2205"
        },
        {
            "id": "220602",
            "name": "萨尔图区",
            "level": "3",
            "parent_id": "2206"
        },
        {
            "id": "220603",
            "name": "龙凤区",
            "level": "3",
            "parent_id": "2206"
        },
        {
            "id": "220604",
            "name": "让胡路区",
            "level": "3",
            "parent_id": "2206"
        },
        {
            "id": "220605",
            "name": "红岗区",
            "level": "3",
            "parent_id": "2206"
        },
        {
            "id": "220606",
            "name": "大同区",
            "level": "3",
            "parent_id": "2206"
        },
        {
            "id": "220607",
            "name": "肇州县",
            "level": "3",
            "parent_id": "2206"
        },
        {
            "id": "220608",
            "name": "肇源县",
            "level": "3",
            "parent_id": "2206"
        },
        {
            "id": "220609",
            "name": "林甸县",
            "level": "3",
            "parent_id": "2206"
        },
        {
            "id": "220610",
            "name": "杜尔伯特县",
            "level": "3",
            "parent_id": "2206"
        },
        {
            "id": "220611",
            "name": "高新区",
            "level": "3",
            "parent_id": "2206"
        },
        {
            "id": "220702",
            "name": "伊春区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220703",
            "name": "南岔区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220704",
            "name": "友好区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220705",
            "name": "西林区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220706",
            "name": "翠峦区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220707",
            "name": "新青区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220708",
            "name": "美溪区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220709",
            "name": "金山屯区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220710",
            "name": "五营区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220711",
            "name": "乌马河区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220712",
            "name": "汤旺河区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220713",
            "name": "带岭区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220714",
            "name": "乌伊岭区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220715",
            "name": "红星区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220716",
            "name": "上甘岭区",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220717",
            "name": "嘉荫县",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220718",
            "name": "铁力市",
            "level": "3",
            "parent_id": "2207"
        },
        {
            "id": "220802",
            "name": "向阳区",
            "level": "3",
            "parent_id": "2208"
        },
        {
            "id": "220803",
            "name": "前进区",
            "level": "3",
            "parent_id": "2208"
        },
        {
            "id": "220804",
            "name": "东风区",
            "level": "3",
            "parent_id": "2208"
        },
        {
            "id": "220805",
            "name": "郊区",
            "level": "3",
            "parent_id": "2208"
        },
        {
            "id": "220806",
            "name": "桦南县",
            "level": "3",
            "parent_id": "2208"
        },
        {
            "id": "220807",
            "name": "桦川县",
            "level": "3",
            "parent_id": "2208"
        },
        {
            "id": "220808",
            "name": "汤原县",
            "level": "3",
            "parent_id": "2208"
        },
        {
            "id": "220809",
            "name": "抚远县",
            "level": "3",
            "parent_id": "2208"
        },
        {
            "id": "220810",
            "name": "同江市",
            "level": "3",
            "parent_id": "2208"
        },
        {
            "id": "220811",
            "name": "富锦市",
            "level": "3",
            "parent_id": "2208"
        },
        {
            "id": "220902",
            "name": "新兴区",
            "level": "3",
            "parent_id": "2209"
        },
        {
            "id": "220903",
            "name": "桃山区",
            "level": "3",
            "parent_id": "2209"
        },
        {
            "id": "220904",
            "name": "茄子河区",
            "level": "3",
            "parent_id": "2209"
        },
        {
            "id": "220905",
            "name": "勃利县",
            "level": "3",
            "parent_id": "2209"
        },
        {
            "id": "221002",
            "name": "东安区",
            "level": "3",
            "parent_id": "2210"
        },
        {
            "id": "221003",
            "name": "阳明区",
            "level": "3",
            "parent_id": "2210"
        },
        {
            "id": "221004",
            "name": "爱民区",
            "level": "3",
            "parent_id": "2210"
        },
        {
            "id": "221005",
            "name": "西安区",
            "level": "3",
            "parent_id": "2210"
        },
        {
            "id": "221006",
            "name": "东宁县",
            "level": "3",
            "parent_id": "2210"
        },
        {
            "id": "221007",
            "name": "林口县",
            "level": "3",
            "parent_id": "2210"
        },
        {
            "id": "221008",
            "name": "绥芬河市",
            "level": "3",
            "parent_id": "2210"
        },
        {
            "id": "221009",
            "name": "海林市",
            "level": "3",
            "parent_id": "2210"
        },
        {
            "id": "221010",
            "name": "宁安市",
            "level": "3",
            "parent_id": "2210"
        },
        {
            "id": "221011",
            "name": "穆棱市",
            "level": "3",
            "parent_id": "2210"
        },
        {
            "id": "221102",
            "name": "爱辉区",
            "level": "3",
            "parent_id": "2211"
        },
        {
            "id": "221103",
            "name": "嫩江县",
            "level": "3",
            "parent_id": "2211"
        },
        {
            "id": "221104",
            "name": "逊克县",
            "level": "3",
            "parent_id": "2211"
        },
        {
            "id": "221105",
            "name": "孙吴县",
            "level": "3",
            "parent_id": "2211"
        },
        {
            "id": "221106",
            "name": "北安市",
            "level": "3",
            "parent_id": "2211"
        },
        {
            "id": "221107",
            "name": "五大连池市",
            "level": "3",
            "parent_id": "2211"
        },
        {
            "id": "221202",
            "name": "北林区",
            "level": "3",
            "parent_id": "2212"
        },
        {
            "id": "221203",
            "name": "望奎县",
            "level": "3",
            "parent_id": "2212"
        },
        {
            "id": "221204",
            "name": "兰西县",
            "level": "3",
            "parent_id": "2212"
        },
        {
            "id": "221205",
            "name": "青冈县",
            "level": "3",
            "parent_id": "2212"
        },
        {
            "id": "221206",
            "name": "庆安县",
            "level": "3",
            "parent_id": "2212"
        },
        {
            "id": "221207",
            "name": "明水县",
            "level": "3",
            "parent_id": "2212"
        },
        {
            "id": "221208",
            "name": "绥棱县",
            "level": "3",
            "parent_id": "2212"
        },
        {
            "id": "221209",
            "name": "安达市",
            "level": "3",
            "parent_id": "2212"
        },
        {
            "id": "221210",
            "name": "肇东市",
            "level": "3",
            "parent_id": "2212"
        },
        {
            "id": "221211",
            "name": "海伦市",
            "level": "3",
            "parent_id": "2212"
        },
        {
            "id": "221301",
            "name": "加格达奇区",
            "level": "3",
            "parent_id": "2213"
        },
        {
            "id": "221302",
            "name": "松岭区",
            "level": "3",
            "parent_id": "2213"
        },
        {
            "id": "221303",
            "name": "新林区",
            "level": "3",
            "parent_id": "2213"
        },
        {
            "id": "221304",
            "name": "呼中区",
            "level": "3",
            "parent_id": "2213"
        },
        {
            "id": "221305",
            "name": "呼玛县",
            "level": "3",
            "parent_id": "2213"
        },
        {
            "id": "221306",
            "name": "塔河县",
            "level": "3",
            "parent_id": "2213"
        },
        {
            "id": "221307",
            "name": "漠河县",
            "level": "3",
            "parent_id": "2213"
        },
        {
            "id": "310102",
            "name": "玄武区",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310103",
            "name": "白下区",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310104",
            "name": "秦淮区",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310105",
            "name": "建邺区",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310106",
            "name": "鼓楼区",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310107",
            "name": "下关区",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310108",
            "name": "浦口区",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310109",
            "name": "栖霞区",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310110",
            "name": "雨花台区",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310111",
            "name": "江宁区",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310112",
            "name": "六合区",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310113",
            "name": "溧水县",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310114",
            "name": "高淳县",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310115",
            "name": "开发区",
            "level": "3",
            "parent_id": "3101"
        },
        {
            "id": "310202",
            "name": "沧浪区",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310203",
            "name": "平江区",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310204",
            "name": "金阊区",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310205",
            "name": "虎丘区",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310206",
            "name": "吴中区",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310207",
            "name": "相城区",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310208",
            "name": "常熟市",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310209",
            "name": "张家港市",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310210",
            "name": "昆山市",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310211",
            "name": "吴江市",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310212",
            "name": "太仓市",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310213",
            "name": "工业园区",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310214",
            "name": "高新区",
            "level": "3",
            "parent_id": "3102"
        },
        {
            "id": "310302",
            "name": "崇安区",
            "level": "3",
            "parent_id": "3103"
        },
        {
            "id": "310303",
            "name": "南长区",
            "level": "3",
            "parent_id": "3103"
        },
        {
            "id": "310304",
            "name": "北塘区",
            "level": "3",
            "parent_id": "3103"
        },
        {
            "id": "310305",
            "name": "锡山区",
            "level": "3",
            "parent_id": "3103"
        },
        {
            "id": "310306",
            "name": "惠山区",
            "level": "3",
            "parent_id": "3103"
        },
        {
            "id": "310307",
            "name": "滨湖区",
            "level": "3",
            "parent_id": "3103"
        },
        {
            "id": "310308",
            "name": "江阴市",
            "level": "3",
            "parent_id": "3103"
        },
        {
            "id": "310309",
            "name": "宜兴市",
            "level": "3",
            "parent_id": "3103"
        },
        {
            "id": "310310",
            "name": "高新区",
            "level": "3",
            "parent_id": "3103"
        },
        {
            "id": "310402",
            "name": "京口区",
            "level": "3",
            "parent_id": "3104"
        },
        {
            "id": "310403",
            "name": "润州区",
            "level": "3",
            "parent_id": "3104"
        },
        {
            "id": "310404",
            "name": "丹徒区",
            "level": "3",
            "parent_id": "3104"
        },
        {
            "id": "310405",
            "name": "丹阳市",
            "level": "3",
            "parent_id": "3104"
        },
        {
            "id": "310406",
            "name": "扬中市",
            "level": "3",
            "parent_id": "3104"
        },
        {
            "id": "310407",
            "name": "句容市",
            "level": "3",
            "parent_id": "3104"
        },
        {
            "id": "310408",
            "name": "开发区",
            "level": "3",
            "parent_id": "3104"
        },
        {
            "id": "310502",
            "name": "广陵区",
            "level": "3",
            "parent_id": "3105"
        },
        {
            "id": "310503",
            "name": "邗江区",
            "level": "3",
            "parent_id": "3105"
        },
        {
            "id": "310505",
            "name": "宝应县",
            "level": "3",
            "parent_id": "3105"
        },
        {
            "id": "310506",
            "name": "仪征市",
            "level": "3",
            "parent_id": "3105"
        },
        {
            "id": "310507",
            "name": "高邮市",
            "level": "3",
            "parent_id": "3105"
        },
        {
            "id": "310508",
            "name": "江都区",
            "level": "3",
            "parent_id": "3105"
        },
        {
            "id": "310509",
            "name": "开发区",
            "level": "3",
            "parent_id": "3105"
        },
        {
            "id": "310602",
            "name": "崇川区",
            "level": "3",
            "parent_id": "3106"
        },
        {
            "id": "310603",
            "name": "港闸区",
            "level": "3",
            "parent_id": "3106"
        },
        {
            "id": "310604",
            "name": "海安县",
            "level": "3",
            "parent_id": "3106"
        },
        {
            "id": "310605",
            "name": "如东县",
            "level": "3",
            "parent_id": "3106"
        },
        {
            "id": "310606",
            "name": "启东市",
            "level": "3",
            "parent_id": "3106"
        },
        {
            "id": "310607",
            "name": "如皋市",
            "level": "3",
            "parent_id": "3106"
        },
        {
            "id": "310608",
            "name": "通州市",
            "level": "3",
            "parent_id": "3106"
        },
        {
            "id": "310609",
            "name": "海门市",
            "level": "3",
            "parent_id": "3106"
        },
        {
            "id": "310610",
            "name": "开发区",
            "level": "3",
            "parent_id": "3106"
        },
        {
            "id": "310702",
            "name": "天宁区",
            "level": "3",
            "parent_id": "3107"
        },
        {
            "id": "310703",
            "name": "钟楼区",
            "level": "3",
            "parent_id": "3107"
        },
        {
            "id": "310704",
            "name": "戚墅堰区",
            "level": "3",
            "parent_id": "3107"
        },
        {
            "id": "310705",
            "name": "新北区",
            "level": "3",
            "parent_id": "3107"
        },
        {
            "id": "310706",
            "name": "武进区",
            "level": "3",
            "parent_id": "3107"
        },
        {
            "id": "310707",
            "name": "溧阳市",
            "level": "3",
            "parent_id": "3107"
        },
        {
            "id": "310708",
            "name": "金坛市",
            "level": "3",
            "parent_id": "3107"
        },
        {
            "id": "310802",
            "name": "鼓楼区",
            "level": "3",
            "parent_id": "3108"
        },
        {
            "id": "310803",
            "name": "云龙区",
            "level": "3",
            "parent_id": "3108"
        },
        {
            "id": "310804",
            "name": "九里区",
            "level": "3",
            "parent_id": "3108"
        },
        {
            "id": "310805",
            "name": "贾汪区",
            "level": "3",
            "parent_id": "3108"
        },
        {
            "id": "310806",
            "name": "泉山区",
            "level": "3",
            "parent_id": "3108"
        },
        {
            "id": "310807",
            "name": "丰县",
            "level": "3",
            "parent_id": "3108"
        },
        {
            "id": "310808",
            "name": "沛县",
            "level": "3",
            "parent_id": "3108"
        },
        {
            "id": "310809",
            "name": "铜山县",
            "level": "3",
            "parent_id": "3108"
        },
        {
            "id": "310810",
            "name": "睢宁县",
            "level": "3",
            "parent_id": "3108"
        },
        {
            "id": "310811",
            "name": "新沂市",
            "level": "3",
            "parent_id": "3108"
        },
        {
            "id": "310812",
            "name": "邳州市",
            "level": "3",
            "parent_id": "3108"
        },
        {
            "id": "310813",
            "name": "开发区",
            "level": "3",
            "parent_id": "3108"
        },
        {
            "id": "310902",
            "name": "连云区",
            "level": "3",
            "parent_id": "3109"
        },
        {
            "id": "310903",
            "name": "新浦区",
            "level": "3",
            "parent_id": "3109"
        },
        {
            "id": "310904",
            "name": "海州区",
            "level": "3",
            "parent_id": "3109"
        },
        {
            "id": "310905",
            "name": "赣榆县",
            "level": "3",
            "parent_id": "3109"
        },
        {
            "id": "310906",
            "name": "东海县",
            "level": "3",
            "parent_id": "3109"
        },
        {
            "id": "310907",
            "name": "灌云县",
            "level": "3",
            "parent_id": "3109"
        },
        {
            "id": "310908",
            "name": "灌南县",
            "level": "3",
            "parent_id": "3109"
        },
        {
            "id": "310909",
            "name": "开发区",
            "level": "3",
            "parent_id": "3109"
        },
        {
            "id": "311002",
            "name": "亭湖区",
            "level": "3",
            "parent_id": "3110"
        },
        {
            "id": "311003",
            "name": "盐都区",
            "level": "3",
            "parent_id": "3110"
        },
        {
            "id": "311004",
            "name": "响水县",
            "level": "3",
            "parent_id": "3110"
        },
        {
            "id": "311005",
            "name": "滨海县",
            "level": "3",
            "parent_id": "3110"
        },
        {
            "id": "311006",
            "name": "阜宁县",
            "level": "3",
            "parent_id": "3110"
        },
        {
            "id": "311007",
            "name": "射阳县",
            "level": "3",
            "parent_id": "3110"
        },
        {
            "id": "311008",
            "name": "建湖县",
            "level": "3",
            "parent_id": "3110"
        },
        {
            "id": "311009",
            "name": "东台市",
            "level": "3",
            "parent_id": "3110"
        },
        {
            "id": "311010",
            "name": "大丰市",
            "level": "3",
            "parent_id": "3110"
        },
        {
            "id": "311011",
            "name": "开发区",
            "level": "3",
            "parent_id": "3110"
        },
        {
            "id": "311102",
            "name": "清河区",
            "level": "3",
            "parent_id": "3111"
        },
        {
            "id": "311103",
            "name": "楚州区",
            "level": "3",
            "parent_id": "3111"
        },
        {
            "id": "311104",
            "name": "淮阴区",
            "level": "3",
            "parent_id": "3111"
        },
        {
            "id": "311105",
            "name": "清浦区",
            "level": "3",
            "parent_id": "3111"
        },
        {
            "id": "311106",
            "name": "涟水县",
            "level": "3",
            "parent_id": "3111"
        },
        {
            "id": "311107",
            "name": "洪泽县",
            "level": "3",
            "parent_id": "3111"
        },
        {
            "id": "311108",
            "name": "盱眙县",
            "level": "3",
            "parent_id": "3111"
        },
        {
            "id": "311109",
            "name": "金湖县",
            "level": "3",
            "parent_id": "3111"
        },
        {
            "id": "311110",
            "name": "开发区",
            "level": "3",
            "parent_id": "3111"
        },
        {
            "id": "311202",
            "name": "海陵区",
            "level": "3",
            "parent_id": "3112"
        },
        {
            "id": "311203",
            "name": "高港区",
            "level": "3",
            "parent_id": "3112"
        },
        {
            "id": "311204",
            "name": "兴化市",
            "level": "3",
            "parent_id": "3112"
        },
        {
            "id": "311205",
            "name": "靖江市",
            "level": "3",
            "parent_id": "3112"
        },
        {
            "id": "311206",
            "name": "泰兴市",
            "level": "3",
            "parent_id": "3112"
        },
        {
            "id": "311207",
            "name": "姜堰市",
            "level": "3",
            "parent_id": "3112"
        },
        {
            "id": "311208",
            "name": "高新区",
            "level": "3",
            "parent_id": "3112"
        },
        {
            "id": "311302",
            "name": "宿城区",
            "level": "3",
            "parent_id": "3113"
        },
        {
            "id": "311303",
            "name": "宿豫区",
            "level": "3",
            "parent_id": "3113"
        },
        {
            "id": "311304",
            "name": "沭阳县",
            "level": "3",
            "parent_id": "3113"
        },
        {
            "id": "311305",
            "name": "泗阳县",
            "level": "3",
            "parent_id": "3113"
        },
        {
            "id": "311306",
            "name": "泗洪县",
            "level": "3",
            "parent_id": "3113"
        },
        {
            "id": "320102",
            "name": "历下区",
            "level": "3",
            "parent_id": "3201"
        },
        {
            "id": "320103",
            "name": "市中区",
            "level": "3",
            "parent_id": "3201"
        },
        {
            "id": "320104",
            "name": "槐荫区",
            "level": "3",
            "parent_id": "3201"
        },
        {
            "id": "320105",
            "name": "天桥区",
            "level": "3",
            "parent_id": "3201"
        },
        {
            "id": "320106",
            "name": "历城区",
            "level": "3",
            "parent_id": "3201"
        },
        {
            "id": "320107",
            "name": "长清区",
            "level": "3",
            "parent_id": "3201"
        },
        {
            "id": "320108",
            "name": "平阴县",
            "level": "3",
            "parent_id": "3201"
        },
        {
            "id": "320109",
            "name": "济阳县",
            "level": "3",
            "parent_id": "3201"
        },
        {
            "id": "320110",
            "name": "商河县",
            "level": "3",
            "parent_id": "3201"
        },
        {
            "id": "320111",
            "name": "章丘市",
            "level": "3",
            "parent_id": "3201"
        },
        {
            "id": "320112",
            "name": "高新区",
            "level": "3",
            "parent_id": "3201"
        },
        {
            "id": "320202",
            "name": "市南区",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320203",
            "name": "市北区",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320204",
            "name": "四方区",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320205",
            "name": "黄岛区",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320206",
            "name": "崂山区",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320207",
            "name": "李沧区",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320208",
            "name": "城阳区",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320209",
            "name": "胶州市",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320210",
            "name": "即墨市",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320211",
            "name": "平度市",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320212",
            "name": "胶南市",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320213",
            "name": "莱西市",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320214",
            "name": "开发区",
            "level": "3",
            "parent_id": "3202"
        },
        {
            "id": "320302",
            "name": "芝罘区",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320303",
            "name": "福山区",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320304",
            "name": "牟平区",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320305",
            "name": "莱山区",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320306",
            "name": "长岛县",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320307",
            "name": "龙口市",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320308",
            "name": "莱阳市",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320309",
            "name": "莱州市",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320310",
            "name": "蓬莱市",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320311",
            "name": "招远市",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320312",
            "name": "栖霞市",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320313",
            "name": "海阳市",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320314",
            "name": "高新区",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320315",
            "name": "开发区",
            "level": "3",
            "parent_id": "3203"
        },
        {
            "id": "320402",
            "name": "淄川区",
            "level": "3",
            "parent_id": "3204"
        },
        {
            "id": "320403",
            "name": "张店区",
            "level": "3",
            "parent_id": "3204"
        },
        {
            "id": "320404",
            "name": "博山区",
            "level": "3",
            "parent_id": "3204"
        },
        {
            "id": "320405",
            "name": "临淄区",
            "level": "3",
            "parent_id": "3204"
        },
        {
            "id": "320406",
            "name": "周村区",
            "level": "3",
            "parent_id": "3204"
        },
        {
            "id": "320407",
            "name": "桓台县",
            "level": "3",
            "parent_id": "3204"
        },
        {
            "id": "320408",
            "name": "高青县",
            "level": "3",
            "parent_id": "3204"
        },
        {
            "id": "320409",
            "name": "沂源县",
            "level": "3",
            "parent_id": "3204"
        },
        {
            "id": "320410",
            "name": "高新区",
            "level": "3",
            "parent_id": "3204"
        },
        {
            "id": "320502",
            "name": "泰山区",
            "level": "3",
            "parent_id": "3205"
        },
        {
            "id": "320503",
            "name": "岱岳区",
            "level": "3",
            "parent_id": "3205"
        },
        {
            "id": "320504",
            "name": "宁阳县",
            "level": "3",
            "parent_id": "3205"
        },
        {
            "id": "320505",
            "name": "东平县",
            "level": "3",
            "parent_id": "3205"
        },
        {
            "id": "320506",
            "name": "新泰市",
            "level": "3",
            "parent_id": "3205"
        },
        {
            "id": "320507",
            "name": "肥城市",
            "level": "3",
            "parent_id": "3205"
        },
        {
            "id": "320602",
            "name": "潍城区",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320603",
            "name": "寒亭区",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320604",
            "name": "坊子区",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320605",
            "name": "奎文区",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320606",
            "name": "临朐县",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320607",
            "name": "昌乐县",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320608",
            "name": "青州市",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320609",
            "name": "诸城市",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320610",
            "name": "寿光市",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320611",
            "name": "安丘市",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320612",
            "name": "高密市",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320613",
            "name": "昌邑市",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320614",
            "name": "开发区",
            "level": "3",
            "parent_id": "3206"
        },
        {
            "id": "320702",
            "name": "市中区",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320703",
            "name": "任城区",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320704",
            "name": "微山县",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320705",
            "name": "鱼台县",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320706",
            "name": "金乡县",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320707",
            "name": "嘉祥县",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320708",
            "name": "汶上县",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320709",
            "name": "泗水县",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320710",
            "name": "梁山县",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320711",
            "name": "曲阜市",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320712",
            "name": "兖州市",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320713",
            "name": "邹城市",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320714",
            "name": "高新区",
            "level": "3",
            "parent_id": "3207"
        },
        {
            "id": "320802",
            "name": "市中区",
            "level": "3",
            "parent_id": "3208"
        },
        {
            "id": "320803",
            "name": "薛城区",
            "level": "3",
            "parent_id": "3208"
        },
        {
            "id": "320804",
            "name": "峄城区",
            "level": "3",
            "parent_id": "3208"
        },
        {
            "id": "320805",
            "name": "台儿庄区",
            "level": "3",
            "parent_id": "3208"
        },
        {
            "id": "320806",
            "name": "山亭区",
            "level": "3",
            "parent_id": "3208"
        },
        {
            "id": "320807",
            "name": "滕州市",
            "level": "3",
            "parent_id": "3208"
        },
        {
            "id": "320808",
            "name": "高新区",
            "level": "3",
            "parent_id": "3208"
        },
        {
            "id": "320902",
            "name": "德城区",
            "level": "3",
            "parent_id": "3209"
        },
        {
            "id": "320903",
            "name": "陵县",
            "level": "3",
            "parent_id": "3209"
        },
        {
            "id": "320904",
            "name": "宁津县",
            "level": "3",
            "parent_id": "3209"
        },
        {
            "id": "320905",
            "name": "庆云县",
            "level": "3",
            "parent_id": "3209"
        },
        {
            "id": "320906",
            "name": "临邑县",
            "level": "3",
            "parent_id": "3209"
        },
        {
            "id": "320907",
            "name": "齐河县",
            "level": "3",
            "parent_id": "3209"
        },
        {
            "id": "320908",
            "name": "平原县",
            "level": "3",
            "parent_id": "3209"
        },
        {
            "id": "320909",
            "name": "夏津县",
            "level": "3",
            "parent_id": "3209"
        },
        {
            "id": "320910",
            "name": "武城县",
            "level": "3",
            "parent_id": "3209"
        },
        {
            "id": "320911",
            "name": "乐陵市",
            "level": "3",
            "parent_id": "3209"
        },
        {
            "id": "320912",
            "name": "禹城市",
            "level": "3",
            "parent_id": "3209"
        },
        {
            "id": "321002",
            "name": "环翠区",
            "level": "3",
            "parent_id": "3210"
        },
        {
            "id": "321003",
            "name": "文登市",
            "level": "3",
            "parent_id": "3210"
        },
        {
            "id": "321004",
            "name": "荣成市",
            "level": "3",
            "parent_id": "3210"
        },
        {
            "id": "321005",
            "name": "乳山市",
            "level": "3",
            "parent_id": "3210"
        },
        {
            "id": "321006",
            "name": "开发区",
            "level": "3",
            "parent_id": "3210"
        },
        {
            "id": "321102",
            "name": "东港区",
            "level": "3",
            "parent_id": "3211"
        },
        {
            "id": "321103",
            "name": "岚山区",
            "level": "3",
            "parent_id": "3211"
        },
        {
            "id": "321104",
            "name": "五莲县",
            "level": "3",
            "parent_id": "3211"
        },
        {
            "id": "321105",
            "name": "莒县",
            "level": "3",
            "parent_id": "3211"
        },
        {
            "id": "321106",
            "name": "开发区",
            "level": "3",
            "parent_id": "3211"
        },
        {
            "id": "321202",
            "name": "莱城区",
            "level": "3",
            "parent_id": "3212"
        },
        {
            "id": "321203",
            "name": "钢城区",
            "level": "3",
            "parent_id": "3212"
        },
        {
            "id": "321302",
            "name": "滨城区",
            "level": "3",
            "parent_id": "3213"
        },
        {
            "id": "321303",
            "name": "惠民县",
            "level": "3",
            "parent_id": "3213"
        },
        {
            "id": "321304",
            "name": "阳信县",
            "level": "3",
            "parent_id": "3213"
        },
        {
            "id": "321305",
            "name": "无棣县",
            "level": "3",
            "parent_id": "3213"
        },
        {
            "id": "321306",
            "name": "沾化县",
            "level": "3",
            "parent_id": "3213"
        },
        {
            "id": "321307",
            "name": "博兴县",
            "level": "3",
            "parent_id": "3213"
        },
        {
            "id": "321308",
            "name": "邹平县",
            "level": "3",
            "parent_id": "3213"
        },
        {
            "id": "321402",
            "name": "东营区",
            "level": "3",
            "parent_id": "3214"
        },
        {
            "id": "321403",
            "name": "河口区",
            "level": "3",
            "parent_id": "3214"
        },
        {
            "id": "321404",
            "name": "垦利县",
            "level": "3",
            "parent_id": "3214"
        },
        {
            "id": "321405",
            "name": "利津县",
            "level": "3",
            "parent_id": "3214"
        },
        {
            "id": "321406",
            "name": "广饶县",
            "level": "3",
            "parent_id": "3214"
        },
        {
            "id": "321407",
            "name": "开发区",
            "level": "3",
            "parent_id": "3214"
        },
        {
            "id": "321502",
            "name": "东昌府区",
            "level": "3",
            "parent_id": "3215"
        },
        {
            "id": "321503",
            "name": "阳谷县",
            "level": "3",
            "parent_id": "3215"
        },
        {
            "id": "321504",
            "name": "莘县",
            "level": "3",
            "parent_id": "3215"
        },
        {
            "id": "321505",
            "name": "茌平县",
            "level": "3",
            "parent_id": "3215"
        },
        {
            "id": "321506",
            "name": "东阿县",
            "level": "3",
            "parent_id": "3215"
        },
        {
            "id": "321507",
            "name": "冠县",
            "level": "3",
            "parent_id": "3215"
        },
        {
            "id": "321508",
            "name": "高唐县",
            "level": "3",
            "parent_id": "3215"
        },
        {
            "id": "321509",
            "name": "临清市",
            "level": "3",
            "parent_id": "3215"
        },
        {
            "id": "321510",
            "name": "高新区",
            "level": "3",
            "parent_id": "3215"
        },
        {
            "id": "321602",
            "name": "牡丹区",
            "level": "3",
            "parent_id": "3216"
        },
        {
            "id": "321603",
            "name": "曹县",
            "level": "3",
            "parent_id": "3216"
        },
        {
            "id": "321604",
            "name": "单县",
            "level": "3",
            "parent_id": "3216"
        },
        {
            "id": "321605",
            "name": "成武县",
            "level": "3",
            "parent_id": "3216"
        },
        {
            "id": "321606",
            "name": "巨野县",
            "level": "3",
            "parent_id": "3216"
        },
        {
            "id": "321607",
            "name": "郓城县",
            "level": "3",
            "parent_id": "3216"
        },
        {
            "id": "321608",
            "name": "鄄城县",
            "level": "3",
            "parent_id": "3216"
        },
        {
            "id": "321609",
            "name": "定陶县",
            "level": "3",
            "parent_id": "3216"
        },
        {
            "id": "321610",
            "name": "东明县",
            "level": "3",
            "parent_id": "3216"
        },
        {
            "id": "321702",
            "name": "兰山区",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "321703",
            "name": "罗庄区",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "321704",
            "name": "河东区",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "321705",
            "name": "沂南县",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "321706",
            "name": "郯城县",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "321707",
            "name": "沂水县",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "321708",
            "name": "苍山县",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "321709",
            "name": "费县",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "321710",
            "name": "平邑县",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "321711",
            "name": "莒南县",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "321712",
            "name": "蒙阴县",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "321713",
            "name": "临沭县",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "321714",
            "name": "开发区",
            "level": "3",
            "parent_id": "3217"
        },
        {
            "id": "330102",
            "name": "瑶海区",
            "level": "3",
            "parent_id": "3301"
        },
        {
            "id": "330103",
            "name": "庐阳区",
            "level": "3",
            "parent_id": "3301"
        },
        {
            "id": "330104",
            "name": "蜀山区",
            "level": "3",
            "parent_id": "3301"
        },
        {
            "id": "330105",
            "name": "包河区",
            "level": "3",
            "parent_id": "3301"
        },
        {
            "id": "330106",
            "name": "长丰县",
            "level": "3",
            "parent_id": "3301"
        },
        {
            "id": "330107",
            "name": "肥东县",
            "level": "3",
            "parent_id": "3301"
        },
        {
            "id": "330108",
            "name": "肥西县",
            "level": "3",
            "parent_id": "3301"
        },
        {
            "id": "330109",
            "name": "开发区",
            "level": "3",
            "parent_id": "3301"
        },
        {
            "id": "330202",
            "name": "镜湖区",
            "level": "3",
            "parent_id": "3302"
        },
        {
            "id": "330203",
            "name": "弋江区",
            "level": "3",
            "parent_id": "3302"
        },
        {
            "id": "330204",
            "name": "鸠江区",
            "level": "3",
            "parent_id": "3302"
        },
        {
            "id": "330205",
            "name": "三山区",
            "level": "3",
            "parent_id": "3302"
        },
        {
            "id": "330206",
            "name": "芜湖县",
            "level": "3",
            "parent_id": "3302"
        },
        {
            "id": "330207",
            "name": "繁昌县",
            "level": "3",
            "parent_id": "3302"
        },
        {
            "id": "330208",
            "name": "南陵县",
            "level": "3",
            "parent_id": "3302"
        },
        {
            "id": "330209",
            "name": "开发区",
            "level": "3",
            "parent_id": "3302"
        },
        {
            "id": "330302",
            "name": "龙子湖区",
            "level": "3",
            "parent_id": "3303"
        },
        {
            "id": "330303",
            "name": "蚌山区",
            "level": "3",
            "parent_id": "3303"
        },
        {
            "id": "330304",
            "name": "禹会区",
            "level": "3",
            "parent_id": "3303"
        },
        {
            "id": "330305",
            "name": "淮上区",
            "level": "3",
            "parent_id": "3303"
        },
        {
            "id": "330306",
            "name": "怀远县",
            "level": "3",
            "parent_id": "3303"
        },
        {
            "id": "330307",
            "name": "五河县",
            "level": "3",
            "parent_id": "3303"
        },
        {
            "id": "330308",
            "name": "固镇县",
            "level": "3",
            "parent_id": "3303"
        },
        {
            "id": "330309",
            "name": "高新区",
            "level": "3",
            "parent_id": "3303"
        },
        {
            "id": "330402",
            "name": "金家庄区",
            "level": "3",
            "parent_id": "3304"
        },
        {
            "id": "330403",
            "name": "花山区",
            "level": "3",
            "parent_id": "3304"
        },
        {
            "id": "330404",
            "name": "雨山区",
            "level": "3",
            "parent_id": "3304"
        },
        {
            "id": "330405",
            "name": "当涂县",
            "level": "3",
            "parent_id": "3304"
        },
        {
            "id": "330406",
            "name": "开发区",
            "level": "3",
            "parent_id": "3304"
        },
        {
            "id": "330502",
            "name": "杜集区",
            "level": "3",
            "parent_id": "3305"
        },
        {
            "id": "330503",
            "name": "相山区",
            "level": "3",
            "parent_id": "3305"
        },
        {
            "id": "330504",
            "name": "烈山区",
            "level": "3",
            "parent_id": "3305"
        },
        {
            "id": "330505",
            "name": "濉溪县",
            "level": "3",
            "parent_id": "3305"
        },
        {
            "id": "330602",
            "name": "铜官山区",
            "level": "3",
            "parent_id": "3306"
        },
        {
            "id": "330603",
            "name": "狮子山区",
            "level": "3",
            "parent_id": "3306"
        },
        {
            "id": "330604",
            "name": "郊区",
            "level": "3",
            "parent_id": "3306"
        },
        {
            "id": "330605",
            "name": "铜陵县",
            "level": "3",
            "parent_id": "3306"
        },
        {
            "id": "330606",
            "name": "开发区",
            "level": "3",
            "parent_id": "3306"
        },
        {
            "id": "330702",
            "name": "迎江区",
            "level": "3",
            "parent_id": "3307"
        },
        {
            "id": "330703",
            "name": "大观区",
            "level": "3",
            "parent_id": "3307"
        },
        {
            "id": "330704",
            "name": "宜秀区",
            "level": "3",
            "parent_id": "3307"
        },
        {
            "id": "330705",
            "name": "怀宁县",
            "level": "3",
            "parent_id": "3307"
        },
        {
            "id": "330706",
            "name": "枞阳县",
            "level": "3",
            "parent_id": "3307"
        },
        {
            "id": "330707",
            "name": "潜山县",
            "level": "3",
            "parent_id": "3307"
        },
        {
            "id": "330708",
            "name": "太湖县",
            "level": "3",
            "parent_id": "3307"
        },
        {
            "id": "330709",
            "name": "宿松县",
            "level": "3",
            "parent_id": "3307"
        },
        {
            "id": "330710",
            "name": "望江县",
            "level": "3",
            "parent_id": "3307"
        },
        {
            "id": "330711",
            "name": "岳西县",
            "level": "3",
            "parent_id": "3307"
        },
        {
            "id": "330712",
            "name": "桐城市",
            "level": "3",
            "parent_id": "3307"
        },
        {
            "id": "330713",
            "name": "开发区",
            "level": "3",
            "parent_id": "3307"
        },
        {
            "id": "330802",
            "name": "屯溪区",
            "level": "3",
            "parent_id": "3308"
        },
        {
            "id": "330803",
            "name": "黄山区",
            "level": "3",
            "parent_id": "3308"
        },
        {
            "id": "330804",
            "name": "徽州区",
            "level": "3",
            "parent_id": "3308"
        },
        {
            "id": "330805",
            "name": "歙县",
            "level": "3",
            "parent_id": "3308"
        },
        {
            "id": "330806",
            "name": "休宁县",
            "level": "3",
            "parent_id": "3308"
        },
        {
            "id": "330807",
            "name": "黟县",
            "level": "3",
            "parent_id": "3308"
        },
        {
            "id": "330808",
            "name": "祁门县",
            "level": "3",
            "parent_id": "3308"
        },
        {
            "id": "330902",
            "name": "琅琊区",
            "level": "3",
            "parent_id": "3309"
        },
        {
            "id": "330903",
            "name": "南谯区",
            "level": "3",
            "parent_id": "3309"
        },
        {
            "id": "330904",
            "name": "来安县",
            "level": "3",
            "parent_id": "3309"
        },
        {
            "id": "330905",
            "name": "全椒县",
            "level": "3",
            "parent_id": "3309"
        },
        {
            "id": "330906",
            "name": "定远县",
            "level": "3",
            "parent_id": "3309"
        },
        {
            "id": "330907",
            "name": "凤阳县",
            "level": "3",
            "parent_id": "3309"
        },
        {
            "id": "330908",
            "name": "天长市",
            "level": "3",
            "parent_id": "3309"
        },
        {
            "id": "330909",
            "name": "明光市",
            "level": "3",
            "parent_id": "3309"
        },
        {
            "id": "331002",
            "name": "埇桥区",
            "level": "3",
            "parent_id": "3310"
        },
        {
            "id": "331003",
            "name": "砀山县",
            "level": "3",
            "parent_id": "3310"
        },
        {
            "id": "331004",
            "name": "萧县",
            "level": "3",
            "parent_id": "3310"
        },
        {
            "id": "331005",
            "name": "灵璧县",
            "level": "3",
            "parent_id": "3310"
        },
        {
            "id": "331006",
            "name": "泗县",
            "level": "3",
            "parent_id": "3310"
        },
        {
            "id": "331102",
            "name": "贵池区",
            "level": "3",
            "parent_id": "3311"
        },
        {
            "id": "331103",
            "name": "东至县",
            "level": "3",
            "parent_id": "3311"
        },
        {
            "id": "331104",
            "name": "石台县",
            "level": "3",
            "parent_id": "3311"
        },
        {
            "id": "331105",
            "name": "青阳县",
            "level": "3",
            "parent_id": "3311"
        },
        {
            "id": "331202",
            "name": "大通区",
            "level": "3",
            "parent_id": "3312"
        },
        {
            "id": "331203",
            "name": "田家庵区",
            "level": "3",
            "parent_id": "3312"
        },
        {
            "id": "331204",
            "name": "谢家集区",
            "level": "3",
            "parent_id": "3312"
        },
        {
            "id": "331205",
            "name": "八公山区",
            "level": "3",
            "parent_id": "3312"
        },
        {
            "id": "331206",
            "name": "潘集区",
            "level": "3",
            "parent_id": "3312"
        },
        {
            "id": "331207",
            "name": "凤台县",
            "level": "3",
            "parent_id": "3312"
        },
        {
            "id": "331302",
            "name": "居巢区",
            "level": "3",
            "parent_id": "3313"
        },
        {
            "id": "331303",
            "name": "庐江县",
            "level": "3",
            "parent_id": "3313"
        },
        {
            "id": "331304",
            "name": "无为县",
            "level": "3",
            "parent_id": "3313"
        },
        {
            "id": "331305",
            "name": "含山县",
            "level": "3",
            "parent_id": "3313"
        },
        {
            "id": "331306",
            "name": "和县",
            "level": "3",
            "parent_id": "3313"
        },
        {
            "id": "331402",
            "name": "颍州区",
            "level": "3",
            "parent_id": "3314"
        },
        {
            "id": "331403",
            "name": "颍东区",
            "level": "3",
            "parent_id": "3314"
        },
        {
            "id": "331404",
            "name": "颍泉区",
            "level": "3",
            "parent_id": "3314"
        },
        {
            "id": "331405",
            "name": "临泉县",
            "level": "3",
            "parent_id": "3314"
        },
        {
            "id": "331406",
            "name": "太和县",
            "level": "3",
            "parent_id": "3314"
        },
        {
            "id": "331407",
            "name": "阜南县",
            "level": "3",
            "parent_id": "3314"
        },
        {
            "id": "331408",
            "name": "颍上县",
            "level": "3",
            "parent_id": "3314"
        },
        {
            "id": "331409",
            "name": "界首市",
            "level": "3",
            "parent_id": "3314"
        },
        {
            "id": "331502",
            "name": "金安区",
            "level": "3",
            "parent_id": "3315"
        },
        {
            "id": "331503",
            "name": "裕安区",
            "level": "3",
            "parent_id": "3315"
        },
        {
            "id": "331504",
            "name": "寿县",
            "level": "3",
            "parent_id": "3315"
        },
        {
            "id": "331505",
            "name": "霍邱县",
            "level": "3",
            "parent_id": "3315"
        },
        {
            "id": "331506",
            "name": "舒城县",
            "level": "3",
            "parent_id": "3315"
        },
        {
            "id": "331507",
            "name": "金寨县",
            "level": "3",
            "parent_id": "3315"
        },
        {
            "id": "331508",
            "name": "霍山县",
            "level": "3",
            "parent_id": "3315"
        },
        {
            "id": "331602",
            "name": "宣州区",
            "level": "3",
            "parent_id": "3316"
        },
        {
            "id": "331603",
            "name": "郎溪县",
            "level": "3",
            "parent_id": "3316"
        },
        {
            "id": "331604",
            "name": "广德县",
            "level": "3",
            "parent_id": "3316"
        },
        {
            "id": "331605",
            "name": "泾县",
            "level": "3",
            "parent_id": "3316"
        },
        {
            "id": "331606",
            "name": "绩溪县",
            "level": "3",
            "parent_id": "3316"
        },
        {
            "id": "331607",
            "name": "旌德县",
            "level": "3",
            "parent_id": "3316"
        },
        {
            "id": "331608",
            "name": "宁国市",
            "level": "3",
            "parent_id": "3316"
        },
        {
            "id": "331702",
            "name": "谯城区",
            "level": "3",
            "parent_id": "3317"
        },
        {
            "id": "331703",
            "name": "涡阳县",
            "level": "3",
            "parent_id": "3317"
        },
        {
            "id": "331704",
            "name": "蒙城县",
            "level": "3",
            "parent_id": "3317"
        },
        {
            "id": "331705",
            "name": "利辛县",
            "level": "3",
            "parent_id": "3317"
        },
        {
            "id": "340102",
            "name": "鼓楼区",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340103",
            "name": "台江区",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340104",
            "name": "仓山区",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340105",
            "name": "马尾区",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340106",
            "name": "晋安区",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340107",
            "name": "闽侯县",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340108",
            "name": "连江县",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340109",
            "name": "罗源县",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340110",
            "name": "闽清县",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340111",
            "name": "永泰县",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340112",
            "name": "平潭县",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340113",
            "name": "福清市",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340114",
            "name": "长乐市",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340115",
            "name": "开发区",
            "level": "3",
            "parent_id": "3401"
        },
        {
            "id": "340202",
            "name": "思明区",
            "level": "3",
            "parent_id": "3402"
        },
        {
            "id": "340203",
            "name": "海沧区",
            "level": "3",
            "parent_id": "3402"
        },
        {
            "id": "340204",
            "name": "湖里区",
            "level": "3",
            "parent_id": "3402"
        },
        {
            "id": "340205",
            "name": "集美区",
            "level": "3",
            "parent_id": "3402"
        },
        {
            "id": "340206",
            "name": "同安区",
            "level": "3",
            "parent_id": "3402"
        },
        {
            "id": "340207",
            "name": "翔安区",
            "level": "3",
            "parent_id": "3402"
        },
        {
            "id": "340208",
            "name": "开发区",
            "level": "3",
            "parent_id": "3402"
        },
        {
            "id": "340302",
            "name": "芗城区",
            "level": "3",
            "parent_id": "3403"
        },
        {
            "id": "340303",
            "name": "龙文区",
            "level": "3",
            "parent_id": "3403"
        },
        {
            "id": "340304",
            "name": "云霄县",
            "level": "3",
            "parent_id": "3403"
        },
        {
            "id": "340305",
            "name": "漳浦县",
            "level": "3",
            "parent_id": "3403"
        },
        {
            "id": "340306",
            "name": "诏安县",
            "level": "3",
            "parent_id": "3403"
        },
        {
            "id": "340307",
            "name": "长泰县",
            "level": "3",
            "parent_id": "3403"
        },
        {
            "id": "340308",
            "name": "东山县",
            "level": "3",
            "parent_id": "3403"
        },
        {
            "id": "340309",
            "name": "南靖县",
            "level": "3",
            "parent_id": "3403"
        },
        {
            "id": "340310",
            "name": "平和县",
            "level": "3",
            "parent_id": "3403"
        },
        {
            "id": "340311",
            "name": "华安县",
            "level": "3",
            "parent_id": "3403"
        },
        {
            "id": "340312",
            "name": "龙海市",
            "level": "3",
            "parent_id": "3403"
        },
        {
            "id": "340313",
            "name": "开发区",
            "level": "3",
            "parent_id": "3403"
        },
        {
            "id": "340402",
            "name": "鲤城区",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340403",
            "name": "丰泽区",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340404",
            "name": "洛江区",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340405",
            "name": "泉港区",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340406",
            "name": "惠安县",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340407",
            "name": "安溪县",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340408",
            "name": "永春县",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340409",
            "name": "德化县",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340410",
            "name": "金门县",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340411",
            "name": "石狮市",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340412",
            "name": "晋江市",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340413",
            "name": "南安市",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340414",
            "name": "开发区",
            "level": "3",
            "parent_id": "3404"
        },
        {
            "id": "340502",
            "name": "城厢区",
            "level": "3",
            "parent_id": "3405"
        },
        {
            "id": "340503",
            "name": "涵江区",
            "level": "3",
            "parent_id": "3405"
        },
        {
            "id": "340504",
            "name": "荔城区",
            "level": "3",
            "parent_id": "3405"
        },
        {
            "id": "340505",
            "name": "秀屿区",
            "level": "3",
            "parent_id": "3405"
        },
        {
            "id": "340506",
            "name": "仙游县",
            "level": "3",
            "parent_id": "3405"
        },
        {
            "id": "340602",
            "name": "梅列区",
            "level": "3",
            "parent_id": "3406"
        },
        {
            "id": "340603",
            "name": "三元区",
            "level": "3",
            "parent_id": "3406"
        },
        {
            "id": "340604",
            "name": "明溪县",
            "level": "3",
            "parent_id": "3406"
        },
        {
            "id": "340605",
            "name": "清流县",
            "level": "3",
            "parent_id": "3406"
        },
        {
            "id": "340606",
            "name": "宁化县",
            "level": "3",
            "parent_id": "3406"
        },
        {
            "id": "340607",
            "name": "大田县",
            "level": "3",
            "parent_id": "3406"
        },
        {
            "id": "340608",
            "name": "尤溪县",
            "level": "3",
            "parent_id": "3406"
        },
        {
            "id": "340609",
            "name": "沙县",
            "level": "3",
            "parent_id": "3406"
        },
        {
            "id": "340610",
            "name": "将乐县",
            "level": "3",
            "parent_id": "3406"
        },
        {
            "id": "340611",
            "name": "泰宁县",
            "level": "3",
            "parent_id": "3406"
        },
        {
            "id": "340612",
            "name": "建宁县",
            "level": "3",
            "parent_id": "3406"
        },
        {
            "id": "340613",
            "name": "永安市",
            "level": "3",
            "parent_id": "3406"
        },
        {
            "id": "340702",
            "name": "延平区",
            "level": "3",
            "parent_id": "3407"
        },
        {
            "id": "340703",
            "name": "顺昌县",
            "level": "3",
            "parent_id": "3407"
        },
        {
            "id": "340704",
            "name": "浦城县",
            "level": "3",
            "parent_id": "3407"
        },
        {
            "id": "340705",
            "name": "光泽县",
            "level": "3",
            "parent_id": "3407"
        },
        {
            "id": "340706",
            "name": "松溪县",
            "level": "3",
            "parent_id": "3407"
        },
        {
            "id": "340707",
            "name": "政和县",
            "level": "3",
            "parent_id": "3407"
        },
        {
            "id": "340708",
            "name": "邵武市",
            "level": "3",
            "parent_id": "3407"
        },
        {
            "id": "340709",
            "name": "武夷山市",
            "level": "3",
            "parent_id": "3407"
        },
        {
            "id": "340710",
            "name": "建瓯市",
            "level": "3",
            "parent_id": "3407"
        },
        {
            "id": "340711",
            "name": "建阳市",
            "level": "3",
            "parent_id": "3407"
        },
        {
            "id": "340802",
            "name": "新罗区",
            "level": "3",
            "parent_id": "3408"
        },
        {
            "id": "340803",
            "name": "长汀县",
            "level": "3",
            "parent_id": "3408"
        },
        {
            "id": "340804",
            "name": "永定县",
            "level": "3",
            "parent_id": "3408"
        },
        {
            "id": "340805",
            "name": "上杭县",
            "level": "3",
            "parent_id": "3408"
        },
        {
            "id": "340806",
            "name": "武平县",
            "level": "3",
            "parent_id": "3408"
        },
        {
            "id": "340807",
            "name": "连城县",
            "level": "3",
            "parent_id": "3408"
        },
        {
            "id": "340808",
            "name": "漳平市",
            "level": "3",
            "parent_id": "3408"
        },
        {
            "id": "340902",
            "name": "蕉城区",
            "level": "3",
            "parent_id": "3409"
        },
        {
            "id": "340903",
            "name": "霞浦县",
            "level": "3",
            "parent_id": "3409"
        },
        {
            "id": "340904",
            "name": "古田县",
            "level": "3",
            "parent_id": "3409"
        },
        {
            "id": "340905",
            "name": "屏南县",
            "level": "3",
            "parent_id": "3409"
        },
        {
            "id": "340906",
            "name": "寿宁县",
            "level": "3",
            "parent_id": "3409"
        },
        {
            "id": "340907",
            "name": "周宁县",
            "level": "3",
            "parent_id": "3409"
        },
        {
            "id": "340908",
            "name": "柘荣县",
            "level": "3",
            "parent_id": "3409"
        },
        {
            "id": "340909",
            "name": "福安市",
            "level": "3",
            "parent_id": "3409"
        },
        {
            "id": "340910",
            "name": "福鼎市",
            "level": "3",
            "parent_id": "3409"
        },
        {
            "id": "350102",
            "name": "上城区",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350103",
            "name": "下城区",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350104",
            "name": "江干区",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350105",
            "name": "拱墅区",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350106",
            "name": "西湖区",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350107",
            "name": "滨江区",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350108",
            "name": "萧山区",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350109",
            "name": "余杭区",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350110",
            "name": "桐庐县",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350111",
            "name": "淳安县",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350112",
            "name": "建德市",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350113",
            "name": "富阳市",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350114",
            "name": "临安市",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350115",
            "name": "开发区",
            "level": "3",
            "parent_id": "3501"
        },
        {
            "id": "350202",
            "name": "海曙区",
            "level": "3",
            "parent_id": "3502"
        },
        {
            "id": "350203",
            "name": "江东区",
            "level": "3",
            "parent_id": "3502"
        },
        {
            "id": "350204",
            "name": "江北区",
            "level": "3",
            "parent_id": "3502"
        },
        {
            "id": "350205",
            "name": "北仑区",
            "level": "3",
            "parent_id": "3502"
        },
        {
            "id": "350206",
            "name": "镇海区",
            "level": "3",
            "parent_id": "3502"
        },
        {
            "id": "350207",
            "name": "鄞州区",
            "level": "3",
            "parent_id": "3502"
        },
        {
            "id": "350208",
            "name": "象山县",
            "level": "3",
            "parent_id": "3502"
        },
        {
            "id": "350209",
            "name": "宁海县",
            "level": "3",
            "parent_id": "3502"
        },
        {
            "id": "350210",
            "name": "余姚市",
            "level": "3",
            "parent_id": "3502"
        },
        {
            "id": "350211",
            "name": "慈溪市",
            "level": "3",
            "parent_id": "3502"
        },
        {
            "id": "350212",
            "name": "奉化市",
            "level": "3",
            "parent_id": "3502"
        },
        {
            "id": "350213",
            "name": "开发区",
            "level": "3",
            "parent_id": "3502"
        },
        {
            "id": "350302",
            "name": "鹿城区",
            "level": "3",
            "parent_id": "3503"
        },
        {
            "id": "350303",
            "name": "龙湾区",
            "level": "3",
            "parent_id": "3503"
        },
        {
            "id": "350304",
            "name": "瓯海区",
            "level": "3",
            "parent_id": "3503"
        },
        {
            "id": "350305",
            "name": "洞头县",
            "level": "3",
            "parent_id": "3503"
        },
        {
            "id": "350306",
            "name": "永嘉县",
            "level": "3",
            "parent_id": "3503"
        },
        {
            "id": "350307",
            "name": "平阳县",
            "level": "3",
            "parent_id": "3503"
        },
        {
            "id": "350308",
            "name": "苍南县",
            "level": "3",
            "parent_id": "3503"
        },
        {
            "id": "350309",
            "name": "文成县",
            "level": "3",
            "parent_id": "3503"
        },
        {
            "id": "350310",
            "name": "泰顺县",
            "level": "3",
            "parent_id": "3503"
        },
        {
            "id": "350311",
            "name": "瑞安市",
            "level": "3",
            "parent_id": "3503"
        },
        {
            "id": "350312",
            "name": "乐清市",
            "level": "3",
            "parent_id": "3503"
        },
        {
            "id": "350313",
            "name": "开发区",
            "level": "3",
            "parent_id": "3503"
        },
        {
            "id": "350402",
            "name": "南湖区",
            "level": "3",
            "parent_id": "3504"
        },
        {
            "id": "350403",
            "name": "秀洲区",
            "level": "3",
            "parent_id": "3504"
        },
        {
            "id": "350404",
            "name": "嘉善县",
            "level": "3",
            "parent_id": "3504"
        },
        {
            "id": "350405",
            "name": "海盐县",
            "level": "3",
            "parent_id": "3504"
        },
        {
            "id": "350406",
            "name": "海宁市",
            "level": "3",
            "parent_id": "3504"
        },
        {
            "id": "350407",
            "name": "平湖市",
            "level": "3",
            "parent_id": "3504"
        },
        {
            "id": "350408",
            "name": "桐乡市",
            "level": "3",
            "parent_id": "3504"
        },
        {
            "id": "350409",
            "name": "开发区",
            "level": "3",
            "parent_id": "3504"
        },
        {
            "id": "350502",
            "name": "吴兴区",
            "level": "3",
            "parent_id": "3505"
        },
        {
            "id": "350503",
            "name": "南浔区",
            "level": "3",
            "parent_id": "3505"
        },
        {
            "id": "350504",
            "name": "德清县",
            "level": "3",
            "parent_id": "3505"
        },
        {
            "id": "350505",
            "name": "长兴县",
            "level": "3",
            "parent_id": "3505"
        },
        {
            "id": "350506",
            "name": "安吉县",
            "level": "3",
            "parent_id": "3505"
        },
        {
            "id": "350507",
            "name": "开发区",
            "level": "3",
            "parent_id": "3505"
        },
        {
            "id": "350602",
            "name": "越城区",
            "level": "3",
            "parent_id": "3506"
        },
        {
            "id": "350603",
            "name": "绍兴县",
            "level": "3",
            "parent_id": "3506"
        },
        {
            "id": "350604",
            "name": "新昌县",
            "level": "3",
            "parent_id": "3506"
        },
        {
            "id": "350605",
            "name": "诸暨市",
            "level": "3",
            "parent_id": "3506"
        },
        {
            "id": "350606",
            "name": "上虞市",
            "level": "3",
            "parent_id": "3506"
        },
        {
            "id": "350607",
            "name": "嵊州市",
            "level": "3",
            "parent_id": "3506"
        },
        {
            "id": "350608",
            "name": "开发区",
            "level": "3",
            "parent_id": "3506"
        },
        {
            "id": "350702",
            "name": "婺城区",
            "level": "3",
            "parent_id": "3507"
        },
        {
            "id": "350703",
            "name": "金东区",
            "level": "3",
            "parent_id": "3507"
        },
        {
            "id": "350704",
            "name": "武义县",
            "level": "3",
            "parent_id": "3507"
        },
        {
            "id": "350705",
            "name": "浦江县",
            "level": "3",
            "parent_id": "3507"
        },
        {
            "id": "350706",
            "name": "磐安县",
            "level": "3",
            "parent_id": "3507"
        },
        {
            "id": "350707",
            "name": "兰溪市",
            "level": "3",
            "parent_id": "3507"
        },
        {
            "id": "350708",
            "name": "义乌市",
            "level": "3",
            "parent_id": "3507"
        },
        {
            "id": "350709",
            "name": "东阳市",
            "level": "3",
            "parent_id": "3507"
        },
        {
            "id": "350710",
            "name": "永康市",
            "level": "3",
            "parent_id": "3507"
        },
        {
            "id": "350711",
            "name": "开发区",
            "level": "3",
            "parent_id": "3507"
        },
        {
            "id": "350802",
            "name": "柯城区",
            "level": "3",
            "parent_id": "3508"
        },
        {
            "id": "350803",
            "name": "衢江区",
            "level": "3",
            "parent_id": "3508"
        },
        {
            "id": "350804",
            "name": "常山县",
            "level": "3",
            "parent_id": "3508"
        },
        {
            "id": "350805",
            "name": "开化县",
            "level": "3",
            "parent_id": "3508"
        },
        {
            "id": "350806",
            "name": "龙游县",
            "level": "3",
            "parent_id": "3508"
        },
        {
            "id": "350807",
            "name": "江山市",
            "level": "3",
            "parent_id": "3508"
        },
        {
            "id": "350902",
            "name": "定海区",
            "level": "3",
            "parent_id": "3509"
        },
        {
            "id": "350903",
            "name": "普陀区",
            "level": "3",
            "parent_id": "3509"
        },
        {
            "id": "350904",
            "name": "岱山县",
            "level": "3",
            "parent_id": "3509"
        },
        {
            "id": "350905",
            "name": "嵊泗县",
            "level": "3",
            "parent_id": "3509"
        },
        {
            "id": "351002",
            "name": "椒江区",
            "level": "3",
            "parent_id": "3510"
        },
        {
            "id": "351003",
            "name": "黄岩区",
            "level": "3",
            "parent_id": "3510"
        },
        {
            "id": "351004",
            "name": "路桥区",
            "level": "3",
            "parent_id": "3510"
        },
        {
            "id": "351005",
            "name": "玉环县",
            "level": "3",
            "parent_id": "3510"
        },
        {
            "id": "351006",
            "name": "三门县",
            "level": "3",
            "parent_id": "3510"
        },
        {
            "id": "351007",
            "name": "天台县",
            "level": "3",
            "parent_id": "3510"
        },
        {
            "id": "351008",
            "name": "仙居县",
            "level": "3",
            "parent_id": "3510"
        },
        {
            "id": "351009",
            "name": "温岭市",
            "level": "3",
            "parent_id": "3510"
        },
        {
            "id": "351010",
            "name": "临海市",
            "level": "3",
            "parent_id": "3510"
        },
        {
            "id": "351102",
            "name": "莲都区",
            "level": "3",
            "parent_id": "3511"
        },
        {
            "id": "351103",
            "name": "青田县",
            "level": "3",
            "parent_id": "3511"
        },
        {
            "id": "351104",
            "name": "缙云县",
            "level": "3",
            "parent_id": "3511"
        },
        {
            "id": "351105",
            "name": "遂昌县",
            "level": "3",
            "parent_id": "3511"
        },
        {
            "id": "351106",
            "name": "松阳县",
            "level": "3",
            "parent_id": "3511"
        },
        {
            "id": "351107",
            "name": "云和县",
            "level": "3",
            "parent_id": "3511"
        },
        {
            "id": "351108",
            "name": "庆元县",
            "level": "3",
            "parent_id": "3511"
        },
        {
            "id": "351109",
            "name": "景宁县",
            "level": "3",
            "parent_id": "3511"
        },
        {
            "id": "351110",
            "name": "龙泉市",
            "level": "3",
            "parent_id": "3511"
        },
        {
            "id": "360102",
            "name": "东湖区",
            "level": "3",
            "parent_id": "3601"
        },
        {
            "id": "360103",
            "name": "西湖区",
            "level": "3",
            "parent_id": "3601"
        },
        {
            "id": "360104",
            "name": "青云谱区",
            "level": "3",
            "parent_id": "3601"
        },
        {
            "id": "360105",
            "name": "湾里区",
            "level": "3",
            "parent_id": "3601"
        },
        {
            "id": "360106",
            "name": "青山湖区",
            "level": "3",
            "parent_id": "3601"
        },
        {
            "id": "360107",
            "name": "南昌县",
            "level": "3",
            "parent_id": "3601"
        },
        {
            "id": "360108",
            "name": "新建县",
            "level": "3",
            "parent_id": "3601"
        },
        {
            "id": "360109",
            "name": "安义县",
            "level": "3",
            "parent_id": "3601"
        },
        {
            "id": "360110",
            "name": "进贤县",
            "level": "3",
            "parent_id": "3601"
        },
        {
            "id": "360111",
            "name": "开发区",
            "level": "3",
            "parent_id": "3601"
        },
        {
            "id": "360202",
            "name": "昌江区",
            "level": "3",
            "parent_id": "3602"
        },
        {
            "id": "360203",
            "name": "珠山区",
            "level": "3",
            "parent_id": "3602"
        },
        {
            "id": "360204",
            "name": "浮梁县",
            "level": "3",
            "parent_id": "3602"
        },
        {
            "id": "360205",
            "name": "乐平市",
            "level": "3",
            "parent_id": "3602"
        },
        {
            "id": "360206",
            "name": "高新区",
            "level": "3",
            "parent_id": "3602"
        },
        {
            "id": "360302",
            "name": "安源区",
            "level": "3",
            "parent_id": "3603"
        },
        {
            "id": "360303",
            "name": "湘东区",
            "level": "3",
            "parent_id": "3603"
        },
        {
            "id": "360304",
            "name": "莲花县",
            "level": "3",
            "parent_id": "3603"
        },
        {
            "id": "360305",
            "name": "上栗县",
            "level": "3",
            "parent_id": "3603"
        },
        {
            "id": "360306",
            "name": "芦溪县",
            "level": "3",
            "parent_id": "3603"
        },
        {
            "id": "360307",
            "name": "开发区",
            "level": "3",
            "parent_id": "3603"
        },
        {
            "id": "360402",
            "name": "庐山区",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360403",
            "name": "浔阳区",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360404",
            "name": "九江县",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360405",
            "name": "武宁县",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360406",
            "name": "修水县",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360407",
            "name": "永修县",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360408",
            "name": "德安县",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360409",
            "name": "星子县",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360410",
            "name": "都昌县",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360411",
            "name": "湖口县",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360412",
            "name": "彭泽县",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360413",
            "name": "瑞昌市",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360414",
            "name": "开发区",
            "level": "3",
            "parent_id": "3604"
        },
        {
            "id": "360502",
            "name": "渝水区",
            "level": "3",
            "parent_id": "3605"
        },
        {
            "id": "360503",
            "name": "分宜县",
            "level": "3",
            "parent_id": "3605"
        },
        {
            "id": "360504",
            "name": "高新区",
            "level": "3",
            "parent_id": "3605"
        },
        {
            "id": "360602",
            "name": "月湖区",
            "level": "3",
            "parent_id": "3606"
        },
        {
            "id": "360603",
            "name": "余江县",
            "level": "3",
            "parent_id": "3606"
        },
        {
            "id": "360604",
            "name": "贵溪市",
            "level": "3",
            "parent_id": "3606"
        },
        {
            "id": "360702",
            "name": "章贡区",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360703",
            "name": "赣县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360704",
            "name": "信丰县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360705",
            "name": "大余县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360706",
            "name": "上犹县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360707",
            "name": "崇义县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360708",
            "name": "安远县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360709",
            "name": "龙南县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360710",
            "name": "定南县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360711",
            "name": "全南县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360712",
            "name": "宁都县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360713",
            "name": "于都县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360714",
            "name": "兴国县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360715",
            "name": "会昌县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360716",
            "name": "寻乌县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360717",
            "name": "石城县",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360718",
            "name": "瑞金市",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360719",
            "name": "南康市",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360720",
            "name": "开发区",
            "level": "3",
            "parent_id": "3607"
        },
        {
            "id": "360802",
            "name": "吉州区",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360803",
            "name": "青原区",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360804",
            "name": "吉安县",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360805",
            "name": "吉水县",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360806",
            "name": "峡江县",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360807",
            "name": "新干县",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360808",
            "name": "永丰县",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360809",
            "name": "泰和县",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360810",
            "name": "遂川县",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360811",
            "name": "万安县",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360812",
            "name": "安福县",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360813",
            "name": "永新县",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360814",
            "name": "井冈山市",
            "level": "3",
            "parent_id": "3608"
        },
        {
            "id": "360902",
            "name": "袁州区",
            "level": "3",
            "parent_id": "3609"
        },
        {
            "id": "360903",
            "name": "奉新县",
            "level": "3",
            "parent_id": "3609"
        },
        {
            "id": "360904",
            "name": "万载县",
            "level": "3",
            "parent_id": "3609"
        },
        {
            "id": "360905",
            "name": "上高县",
            "level": "3",
            "parent_id": "3609"
        },
        {
            "id": "360906",
            "name": "宜丰县",
            "level": "3",
            "parent_id": "3609"
        },
        {
            "id": "360907",
            "name": "靖安县",
            "level": "3",
            "parent_id": "3609"
        },
        {
            "id": "360908",
            "name": "铜鼓县",
            "level": "3",
            "parent_id": "3609"
        },
        {
            "id": "360909",
            "name": "丰城市",
            "level": "3",
            "parent_id": "3609"
        },
        {
            "id": "360910",
            "name": "樟树市",
            "level": "3",
            "parent_id": "3609"
        },
        {
            "id": "360911",
            "name": "高安市",
            "level": "3",
            "parent_id": "3609"
        },
        {
            "id": "361002",
            "name": "临川区",
            "level": "3",
            "parent_id": "3610"
        },
        {
            "id": "361003",
            "name": "南城县",
            "level": "3",
            "parent_id": "3610"
        },
        {
            "id": "361004",
            "name": "黎川县",
            "level": "3",
            "parent_id": "3610"
        },
        {
            "id": "361005",
            "name": "南丰县",
            "level": "3",
            "parent_id": "3610"
        },
        {
            "id": "361006",
            "name": "崇仁县",
            "level": "3",
            "parent_id": "3610"
        },
        {
            "id": "361007",
            "name": "乐安县",
            "level": "3",
            "parent_id": "3610"
        },
        {
            "id": "361008",
            "name": "宜黄县",
            "level": "3",
            "parent_id": "3610"
        },
        {
            "id": "361009",
            "name": "金溪县",
            "level": "3",
            "parent_id": "3610"
        },
        {
            "id": "361010",
            "name": "资溪县",
            "level": "3",
            "parent_id": "3610"
        },
        {
            "id": "361011",
            "name": "东乡县",
            "level": "3",
            "parent_id": "3610"
        },
        {
            "id": "361012",
            "name": "广昌县",
            "level": "3",
            "parent_id": "3610"
        },
        {
            "id": "361102",
            "name": "信州区",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "361103",
            "name": "上饶县",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "361104",
            "name": "广丰县",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "361105",
            "name": "玉山县",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "361106",
            "name": "铅山县",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "361107",
            "name": "横峰县",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "361108",
            "name": "弋阳县",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "361109",
            "name": "余干县",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "361110",
            "name": "鄱阳县",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "361111",
            "name": "万年县",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "361112",
            "name": "婺源县",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "361113",
            "name": "德兴市",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "361114",
            "name": "开发区",
            "level": "3",
            "parent_id": "3611"
        },
        {
            "id": "400102",
            "name": "荔湾区",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400103",
            "name": "越秀区",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400104",
            "name": "海珠区",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400105",
            "name": "天河区",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400106",
            "name": "白云区",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400107",
            "name": "黄埔区",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400108",
            "name": "番禺区",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400109",
            "name": "花都区",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400110",
            "name": "南沙区",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400111",
            "name": "萝岗区",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400112",
            "name": "增城市",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400113",
            "name": "从化市",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400114",
            "name": "开发区",
            "level": "3",
            "parent_id": "4001"
        },
        {
            "id": "400202",
            "name": "罗湖区",
            "level": "3",
            "parent_id": "4002"
        },
        {
            "id": "400203",
            "name": "福田区",
            "level": "3",
            "parent_id": "4002"
        },
        {
            "id": "400204",
            "name": "南山区",
            "level": "3",
            "parent_id": "4002"
        },
        {
            "id": "400205",
            "name": "宝安区",
            "level": "3",
            "parent_id": "4002"
        },
        {
            "id": "400206",
            "name": "龙岗区",
            "level": "3",
            "parent_id": "4002"
        },
        {
            "id": "400207",
            "name": "盐田区",
            "level": "3",
            "parent_id": "4002"
        },
        {
            "id": "400208",
            "name": "高新区",
            "level": "3",
            "parent_id": "4002"
        },
        {
            "id": "400302",
            "name": "香洲区",
            "level": "3",
            "parent_id": "4003"
        },
        {
            "id": "400303",
            "name": "斗门区",
            "level": "3",
            "parent_id": "4003"
        },
        {
            "id": "400304",
            "name": "金湾区",
            "level": "3",
            "parent_id": "4003"
        },
        {
            "id": "400305",
            "name": "高新区",
            "level": "3",
            "parent_id": "4003"
        },
        {
            "id": "400402",
            "name": "龙湖区",
            "level": "3",
            "parent_id": "4004"
        },
        {
            "id": "400403",
            "name": "金平区",
            "level": "3",
            "parent_id": "4004"
        },
        {
            "id": "400404",
            "name": "濠江区",
            "level": "3",
            "parent_id": "4004"
        },
        {
            "id": "400405",
            "name": "潮阳区",
            "level": "3",
            "parent_id": "4004"
        },
        {
            "id": "400406",
            "name": "潮南区",
            "level": "3",
            "parent_id": "4004"
        },
        {
            "id": "400407",
            "name": "澄海区",
            "level": "3",
            "parent_id": "4004"
        },
        {
            "id": "400408",
            "name": "南澳县",
            "level": "3",
            "parent_id": "4004"
        },
        {
            "id": "400502",
            "name": "武江区",
            "level": "3",
            "parent_id": "4005"
        },
        {
            "id": "400503",
            "name": "浈江区",
            "level": "3",
            "parent_id": "4005"
        },
        {
            "id": "400504",
            "name": "曲江区",
            "level": "3",
            "parent_id": "4005"
        },
        {
            "id": "400505",
            "name": "始兴县",
            "level": "3",
            "parent_id": "4005"
        },
        {
            "id": "400506",
            "name": "仁化县",
            "level": "3",
            "parent_id": "4005"
        },
        {
            "id": "400507",
            "name": "翁源县",
            "level": "3",
            "parent_id": "4005"
        },
        {
            "id": "400508",
            "name": "乳源县",
            "level": "3",
            "parent_id": "4005"
        },
        {
            "id": "400509",
            "name": "新丰县",
            "level": "3",
            "parent_id": "4005"
        },
        {
            "id": "400510",
            "name": "乐昌市",
            "level": "3",
            "parent_id": "4005"
        },
        {
            "id": "400511",
            "name": "南雄市",
            "level": "3",
            "parent_id": "4005"
        },
        {
            "id": "400602",
            "name": "源城区",
            "level": "3",
            "parent_id": "4006"
        },
        {
            "id": "400603",
            "name": "紫金县",
            "level": "3",
            "parent_id": "4006"
        },
        {
            "id": "400604",
            "name": "龙川县",
            "level": "3",
            "parent_id": "4006"
        },
        {
            "id": "400605",
            "name": "连平县",
            "level": "3",
            "parent_id": "4006"
        },
        {
            "id": "400606",
            "name": "和平县",
            "level": "3",
            "parent_id": "4006"
        },
        {
            "id": "400607",
            "name": "东源县",
            "level": "3",
            "parent_id": "4006"
        },
        {
            "id": "400702",
            "name": "梅江区",
            "level": "3",
            "parent_id": "4007"
        },
        {
            "id": "400703",
            "name": "梅县",
            "level": "3",
            "parent_id": "4007"
        },
        {
            "id": "400704",
            "name": "大埔县",
            "level": "3",
            "parent_id": "4007"
        },
        {
            "id": "400705",
            "name": "丰顺县",
            "level": "3",
            "parent_id": "4007"
        },
        {
            "id": "400706",
            "name": "五华县",
            "level": "3",
            "parent_id": "4007"
        },
        {
            "id": "400707",
            "name": "平远县",
            "level": "3",
            "parent_id": "4007"
        },
        {
            "id": "400708",
            "name": "蕉岭县",
            "level": "3",
            "parent_id": "4007"
        },
        {
            "id": "400709",
            "name": "兴宁市",
            "level": "3",
            "parent_id": "4007"
        },
        {
            "id": "400802",
            "name": "惠城区",
            "level": "3",
            "parent_id": "4008"
        },
        {
            "id": "400803",
            "name": "惠阳区",
            "level": "3",
            "parent_id": "4008"
        },
        {
            "id": "400804",
            "name": "博罗县",
            "level": "3",
            "parent_id": "4008"
        },
        {
            "id": "400805",
            "name": "惠东县",
            "level": "3",
            "parent_id": "4008"
        },
        {
            "id": "400806",
            "name": "龙门县",
            "level": "3",
            "parent_id": "4008"
        },
        {
            "id": "400807",
            "name": "高新区",
            "level": "3",
            "parent_id": "4008"
        },
        {
            "id": "400902",
            "name": "城区",
            "level": "3",
            "parent_id": "4009"
        },
        {
            "id": "400903",
            "name": "海丰县",
            "level": "3",
            "parent_id": "4009"
        },
        {
            "id": "400904",
            "name": "陆河县",
            "level": "3",
            "parent_id": "4009"
        },
        {
            "id": "400905",
            "name": "陆丰市",
            "level": "3",
            "parent_id": "4009"
        },
        {
            "id":"401101",
            "name":"全境",
            "level":"3",
            "parent_id":"4011"
        },
        {
            "id": "401202",
            "name": "蓬江区",
            "level": "3",
            "parent_id": "4012"
        },
        {
            "id": "401203",
            "name": "江海区",
            "level": "3",
            "parent_id": "4012"
        },
        {
            "id": "401204",
            "name": "新会区",
            "level": "3",
            "parent_id": "4012"
        },
        {
            "id": "401205",
            "name": "台山市",
            "level": "3",
            "parent_id": "4012"
        },
        {
            "id": "401206",
            "name": "开平市",
            "level": "3",
            "parent_id": "4012"
        },
        {
            "id": "401207",
            "name": "鹤山市",
            "level": "3",
            "parent_id": "4012"
        },
        {
            "id": "401208",
            "name": "恩平市",
            "level": "3",
            "parent_id": "4012"
        },
        {
            "id": "401209",
            "name": "高新区",
            "level": "3",
            "parent_id": "4012"
        },
        {
            "id": "401302",
            "name": "禅城区",
            "level": "3",
            "parent_id": "4013"
        },
        {
            "id": "401303",
            "name": "南海区",
            "level": "3",
            "parent_id": "4013"
        },
        {
            "id": "401304",
            "name": "顺德区",
            "level": "3",
            "parent_id": "4013"
        },
        {
            "id": "401305",
            "name": "三水区",
            "level": "3",
            "parent_id": "4013"
        },
        {
            "id": "401306",
            "name": "高明区",
            "level": "3",
            "parent_id": "4013"
        },
        {
            "id": "401307",
            "name": "高新区",
            "level": "3",
            "parent_id": "4013"
        },
        {
            "id": "401402",
            "name": "江城区",
            "level": "3",
            "parent_id": "4014"
        },
        {
            "id": "401403",
            "name": "阳西县",
            "level": "3",
            "parent_id": "4014"
        },
        {
            "id": "401404",
            "name": "阳东县",
            "level": "3",
            "parent_id": "4014"
        },
        {
            "id": "401405",
            "name": "阳春市",
            "level": "3",
            "parent_id": "4014"
        },
        {
            "id": "401502",
            "name": "赤坎区",
            "level": "3",
            "parent_id": "4015"
        },
        {
            "id": "401503",
            "name": "霞山区",
            "level": "3",
            "parent_id": "4015"
        },
        {
            "id": "401504",
            "name": "坡头区",
            "level": "3",
            "parent_id": "4015"
        },
        {
            "id": "401505",
            "name": "麻章区",
            "level": "3",
            "parent_id": "4015"
        },
        {
            "id": "401506",
            "name": "遂溪县",
            "level": "3",
            "parent_id": "4015"
        },
        {
            "id": "401507",
            "name": "徐闻县",
            "level": "3",
            "parent_id": "4015"
        },
        {
            "id": "401508",
            "name": "廉江市",
            "level": "3",
            "parent_id": "4015"
        },
        {
            "id": "401509",
            "name": "雷州市",
            "level": "3",
            "parent_id": "4015"
        },
        {
            "id": "401510",
            "name": "吴川市",
            "level": "3",
            "parent_id": "4015"
        },
        {
            "id": "401511",
            "name": "开发区",
            "level": "3",
            "parent_id": "4015"
        },
        {
            "id": "401602",
            "name": "茂南区",
            "level": "3",
            "parent_id": "4016"
        },
        {
            "id": "401603",
            "name": "茂港区",
            "level": "3",
            "parent_id": "4016"
        },
        {
            "id": "401604",
            "name": "电白县",
            "level": "3",
            "parent_id": "4016"
        },
        {
            "id": "401605",
            "name": "高州市",
            "level": "3",
            "parent_id": "4016"
        },
        {
            "id": "401606",
            "name": "化州市",
            "level": "3",
            "parent_id": "4016"
        },
        {
            "id": "401607",
            "name": "信宜市",
            "level": "3",
            "parent_id": "4016"
        },
        {
            "id": "401702",
            "name": "端州区",
            "level": "3",
            "parent_id": "4017"
        },
        {
            "id": "401703",
            "name": "鼎湖区",
            "level": "3",
            "parent_id": "4017"
        },
        {
            "id": "401704",
            "name": "广宁县",
            "level": "3",
            "parent_id": "4017"
        },
        {
            "id": "401705",
            "name": "怀集县",
            "level": "3",
            "parent_id": "4017"
        },
        {
            "id": "401706",
            "name": "封开县",
            "level": "3",
            "parent_id": "4017"
        },
        {
            "id": "401707",
            "name": "德庆县",
            "level": "3",
            "parent_id": "4017"
        },
        {
            "id": "401708",
            "name": "高要市",
            "level": "3",
            "parent_id": "4017"
        },
        {
            "id": "401709",
            "name": "四会市",
            "level": "3",
            "parent_id": "4017"
        },
        {
            "id": "401710",
            "name": "高新区",
            "level": "3",
            "parent_id": "4017"
        },
        {
            "id": "401802",
            "name": "清城区",
            "level": "3",
            "parent_id": "4018"
        },
        {
            "id": "401803",
            "name": "佛冈县",
            "level": "3",
            "parent_id": "4018"
        },
        {
            "id": "401804",
            "name": "阳山县",
            "level": "3",
            "parent_id": "4018"
        },
        {
            "id": "401805",
            "name": "连山县",
            "level": "3",
            "parent_id": "4018"
        },
        {
            "id": "401806",
            "name": "连南县",
            "level": "3",
            "parent_id": "4018"
        },
        {
            "id": "401807",
            "name": "清新县",
            "level": "3",
            "parent_id": "4018"
        },
        {
            "id": "401808",
            "name": "英德市",
            "level": "3",
            "parent_id": "4018"
        },
        {
            "id": "401809",
            "name": "连州市",
            "level": "3",
            "parent_id": "4018"
        },
        {
            "id": "401902",
            "name": "湘桥区",
            "level": "3",
            "parent_id": "4019"
        },
        {
            "id": "401903",
            "name": "潮安县",
            "level": "3",
            "parent_id": "4019"
        },
        {
            "id": "401904",
            "name": "饶平县",
            "level": "3",
            "parent_id": "4019"
        },
        {
            "id": "402002",
            "name": "榕城区",
            "level": "3",
            "parent_id": "4020"
        },
        {
            "id": "402003",
            "name": "揭东县",
            "level": "3",
            "parent_id": "4020"
        },
        {
            "id": "402004",
            "name": "揭西县",
            "level": "3",
            "parent_id": "4020"
        },
        {
            "id": "402005",
            "name": "惠来县",
            "level": "3",
            "parent_id": "4020"
        },
        {
            "id": "402006",
            "name": "普宁市",
            "level": "3",
            "parent_id": "4020"
        },
        {
            "id": "402102",
            "name": "云城区",
            "level": "3",
            "parent_id": "4021"
        },
        {
            "id": "402103",
            "name": "新兴县",
            "level": "3",
            "parent_id": "4021"
        },
        {
            "id": "402104",
            "name": "郁南县",
            "level": "3",
            "parent_id": "4021"
        },
        {
            "id": "402105",
            "name": "云安县",
            "level": "3",
            "parent_id": "4021"
        },
        {
            "id": "402106",
            "name": "罗定市",
            "level": "3",
            "parent_id": "4021"
        },
        {
            "id": "410102",
            "name": "兴宁区",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410103",
            "name": "青秀区",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410104",
            "name": "江南区",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410105",
            "name": "西乡塘区",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410106",
            "name": "良庆区",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410107",
            "name": "邕宁区",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410108",
            "name": "武鸣县",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410109",
            "name": "隆安县",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410110",
            "name": "马山县",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410111",
            "name": "上林县",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410112",
            "name": "宾阳县",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410113",
            "name": "横县",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410114",
            "name": "开发区",
            "level": "3",
            "parent_id": "4101"
        },
        {
            "id": "410202",
            "name": "城中区",
            "level": "3",
            "parent_id": "4102"
        },
        {
            "id": "410203",
            "name": "鱼峰区",
            "level": "3",
            "parent_id": "4102"
        },
        {
            "id": "410204",
            "name": "柳南区",
            "level": "3",
            "parent_id": "4102"
        },
        {
            "id": "410205",
            "name": "柳北区",
            "level": "3",
            "parent_id": "4102"
        },
        {
            "id": "410206",
            "name": "柳江县",
            "level": "3",
            "parent_id": "4102"
        },
        {
            "id": "410207",
            "name": "柳城县",
            "level": "3",
            "parent_id": "4102"
        },
        {
            "id": "410208",
            "name": "鹿寨县",
            "level": "3",
            "parent_id": "4102"
        },
        {
            "id": "410209",
            "name": "融安县",
            "level": "3",
            "parent_id": "4102"
        },
        {
            "id": "410210",
            "name": "融水县",
            "level": "3",
            "parent_id": "4102"
        },
        {
            "id": "410211",
            "name": "三江县",
            "level": "3",
            "parent_id": "4102"
        },
        {
            "id": "410212",
            "name": "高新区",
            "level": "3",
            "parent_id": "4102"
        },
        {
            "id": "410302",
            "name": "秀峰区",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410303",
            "name": "叠彩区",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410304",
            "name": "象山区",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410305",
            "name": "七星区",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410306",
            "name": "雁山区",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410307",
            "name": "阳朔县",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410308",
            "name": "临桂县",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410309",
            "name": "灵川县",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410310",
            "name": "全州县",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410311",
            "name": "兴安县",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410312",
            "name": "永福县",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410313",
            "name": "灌阳县",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410314",
            "name": "龙胜县",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410315",
            "name": "资源县",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410316",
            "name": "平乐县",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410317",
            "name": "荔蒲县",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410318",
            "name": "恭城县",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410319",
            "name": "高新区",
            "level": "3",
            "parent_id": "4103"
        },
        {
            "id": "410402",
            "name": "万秀区",
            "level": "3",
            "parent_id": "4104"
        },
        {
            "id": "410403",
            "name": "蝶山区",
            "level": "3",
            "parent_id": "4104"
        },
        {
            "id": "410404",
            "name": "长洲区",
            "level": "3",
            "parent_id": "4104"
        },
        {
            "id": "410405",
            "name": "苍梧县",
            "level": "3",
            "parent_id": "4104"
        },
        {
            "id": "410406",
            "name": "藤县",
            "level": "3",
            "parent_id": "4104"
        },
        {
            "id": "410407",
            "name": "蒙山县",
            "level": "3",
            "parent_id": "4104"
        },
        {
            "id": "410408",
            "name": "岑溪市",
            "level": "3",
            "parent_id": "4104"
        },
        {
            "id": "410502",
            "name": "海城区",
            "level": "3",
            "parent_id": "4105"
        },
        {
            "id": "410503",
            "name": "银海区",
            "level": "3",
            "parent_id": "4105"
        },
        {
            "id": "410504",
            "name": "铁山港区",
            "level": "3",
            "parent_id": "4105"
        },
        {
            "id": "410505",
            "name": "合浦县",
            "level": "3",
            "parent_id": "4105"
        },
        {
            "id": "410602",
            "name": "港口区",
            "level": "3",
            "parent_id": "4106"
        },
        {
            "id": "410603",
            "name": "防城区",
            "level": "3",
            "parent_id": "4106"
        },
        {
            "id": "410604",
            "name": "上思县",
            "level": "3",
            "parent_id": "4106"
        },
        {
            "id": "410605",
            "name": "东兴市",
            "level": "3",
            "parent_id": "4106"
        },
        {
            "id": "410702",
            "name": "钦南区",
            "level": "3",
            "parent_id": "4107"
        },
        {
            "id": "410703",
            "name": "钦北区",
            "level": "3",
            "parent_id": "4107"
        },
        {
            "id": "410704",
            "name": "灵山县",
            "level": "3",
            "parent_id": "4107"
        },
        {
            "id": "410705",
            "name": "浦北县",
            "level": "3",
            "parent_id": "4107"
        },
        {
            "id": "410706",
            "name": "开发区",
            "level": "3",
            "parent_id": "4107"
        },
        {
            "id": "410802",
            "name": "港北区",
            "level": "3",
            "parent_id": "4108"
        },
        {
            "id": "410803",
            "name": "港南区",
            "level": "3",
            "parent_id": "4108"
        },
        {
            "id": "410804",
            "name": "覃塘区",
            "level": "3",
            "parent_id": "4108"
        },
        {
            "id": "410805",
            "name": "平南县",
            "level": "3",
            "parent_id": "4108"
        },
        {
            "id": "410806",
            "name": "桂平市",
            "level": "3",
            "parent_id": "4108"
        },
        {
            "id": "410902",
            "name": "玉州区",
            "level": "3",
            "parent_id": "4109"
        },
        {
            "id": "410903",
            "name": "容县",
            "level": "3",
            "parent_id": "4109"
        },
        {
            "id": "410904",
            "name": "陆川县",
            "level": "3",
            "parent_id": "4109"
        },
        {
            "id": "410905",
            "name": "博白县",
            "level": "3",
            "parent_id": "4109"
        },
        {
            "id": "410906",
            "name": "兴业县",
            "level": "3",
            "parent_id": "4109"
        },
        {
            "id": "410907",
            "name": "北流市",
            "level": "3",
            "parent_id": "4109"
        },
        {
            "id": "411002",
            "name": "右江区",
            "level": "3",
            "parent_id": "4110"
        },
        {
            "id": "411003",
            "name": "田阳县",
            "level": "3",
            "parent_id": "4110"
        },
        {
            "id": "411004",
            "name": "田东县",
            "level": "3",
            "parent_id": "4110"
        },
        {
            "id": "411005",
            "name": "平果县",
            "level": "3",
            "parent_id": "4110"
        },
        {
            "id": "411006",
            "name": "德保县",
            "level": "3",
            "parent_id": "4110"
        },
        {
            "id": "411007",
            "name": "靖西县",
            "level": "3",
            "parent_id": "4110"
        },
        {
            "id": "411008",
            "name": "那坡县",
            "level": "3",
            "parent_id": "4110"
        },
        {
            "id": "411009",
            "name": "凌云县",
            "level": "3",
            "parent_id": "4110"
        },
        {
            "id": "411010",
            "name": "乐业县",
            "level": "3",
            "parent_id": "4110"
        },
        {
            "id": "411011",
            "name": "田林县",
            "level": "3",
            "parent_id": "4110"
        },
        {
            "id": "411012",
            "name": "西林县",
            "level": "3",
            "parent_id": "4110"
        },
        {
            "id": "411013",
            "name": "隆林县",
            "level": "3",
            "parent_id": "4110"
        },
        {
            "id": "411102",
            "name": "八步区",
            "level": "3",
            "parent_id": "4111"
        },
        {
            "id": "411103",
            "name": "昭平县",
            "level": "3",
            "parent_id": "4111"
        },
        {
            "id": "411104",
            "name": "钟山县",
            "level": "3",
            "parent_id": "4111"
        },
        {
            "id": "411105",
            "name": "富川县",
            "level": "3",
            "parent_id": "4111"
        },
        {
            "id": "411202",
            "name": "金城江区",
            "level": "3",
            "parent_id": "4112"
        },
        {
            "id": "411203",
            "name": "南丹县",
            "level": "3",
            "parent_id": "4112"
        },
        {
            "id": "411204",
            "name": "天峨县",
            "level": "3",
            "parent_id": "4112"
        },
        {
            "id": "411205",
            "name": "凤山县",
            "level": "3",
            "parent_id": "4112"
        },
        {
            "id": "411206",
            "name": "东兰县",
            "level": "3",
            "parent_id": "4112"
        },
        {
            "id": "411207",
            "name": "罗城县",
            "level": "3",
            "parent_id": "4112"
        },
        {
            "id": "411208",
            "name": "环江县",
            "level": "3",
            "parent_id": "4112"
        },
        {
            "id": "411209",
            "name": "巴马县",
            "level": "3",
            "parent_id": "4112"
        },
        {
            "id": "411210",
            "name": "都安县",
            "level": "3",
            "parent_id": "4112"
        },
        {
            "id": "411211",
            "name": "大化县",
            "level": "3",
            "parent_id": "4112"
        },
        {
            "id": "411212",
            "name": "宜州市",
            "level": "3",
            "parent_id": "4112"
        },
        {
            "id": "411302",
            "name": "兴宾区",
            "level": "3",
            "parent_id": "4113"
        },
        {
            "id": "411303",
            "name": "忻城县",
            "level": "3",
            "parent_id": "4113"
        },
        {
            "id": "411304",
            "name": "象州县",
            "level": "3",
            "parent_id": "4113"
        },
        {
            "id": "411305",
            "name": "武宣县",
            "level": "3",
            "parent_id": "4113"
        },
        {
            "id": "411306",
            "name": "金秀县",
            "level": "3",
            "parent_id": "4113"
        },
        {
            "id": "411307",
            "name": "合山市",
            "level": "3",
            "parent_id": "4113"
        },
        {
            "id": "411402",
            "name": "江洲区",
            "level": "3",
            "parent_id": "4114"
        },
        {
            "id": "411403",
            "name": "扶绥县",
            "level": "3",
            "parent_id": "4114"
        },
        {
            "id": "411404",
            "name": "宁明县",
            "level": "3",
            "parent_id": "4114"
        },
        {
            "id": "411405",
            "name": "龙州县",
            "level": "3",
            "parent_id": "4114"
        },
        {
            "id": "411406",
            "name": "大新县",
            "level": "3",
            "parent_id": "4114"
        },
        {
            "id": "411407",
            "name": "天等县",
            "level": "3",
            "parent_id": "4114"
        },
        {
            "id": "411408",
            "name": "凭祥市",
            "level": "3",
            "parent_id": "4114"
        },
        {
            "id": "420102",
            "name": "秀英区",
            "level": "3",
            "parent_id": "4201"
        },
        {
            "id": "420103",
            "name": "龙华区",
            "level": "3",
            "parent_id": "4201"
        },
        {
            "id": "420104",
            "name": "琼山区",
            "level": "3",
            "parent_id": "4201"
        },
        {
            "id": "420105",
            "name": "美兰区",
            "level": "3",
            "parent_id": "4201"
        },
        {
            "id": "420106",
            "name": "高新区",
            "level": "3",
            "parent_id": "4201"
        },
        {
            "id": "421902",
            "name": "开发区",
            "level": "3",
            "parent_id": "4219"
        },
        {
            "id": "610102",
            "name": "锦江区",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610103",
            "name": "青羊区",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610104",
            "name": "金牛区",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610105",
            "name": "武侯区",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610106",
            "name": "成华区",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610107",
            "name": "龙泉驿区",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610108",
            "name": "青白江区",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610109",
            "name": "新都区",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610110",
            "name": "温江区",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610111",
            "name": "金堂县",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610112",
            "name": "双流县",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610113",
            "name": "郫县",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610114",
            "name": "大邑县",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610115",
            "name": "蒲江县",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610116",
            "name": "新津县",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610117",
            "name": "都江堰市",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610118",
            "name": "彭州市",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610119",
            "name": "邛崃市",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610120",
            "name": "崇州市",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610121",
            "name": "高新区",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610122",
            "name": "开发区",
            "level": "3",
            "parent_id": "6101"
        },
        {
            "id": "610202",
            "name": "旌阳区",
            "level": "3",
            "parent_id": "6102"
        },
        {
            "id": "610203",
            "name": "中江县",
            "level": "3",
            "parent_id": "6102"
        },
        {
            "id": "610204",
            "name": "罗江县",
            "level": "3",
            "parent_id": "6102"
        },
        {
            "id": "610205",
            "name": "广汉市",
            "level": "3",
            "parent_id": "6102"
        },
        {
            "id": "610206",
            "name": "什邡市",
            "level": "3",
            "parent_id": "6102"
        },
        {
            "id": "610207",
            "name": "绵竹市",
            "level": "3",
            "parent_id": "6102"
        },
        {
            "id": "610208",
            "name": "开发区",
            "level": "3",
            "parent_id": "6102"
        },
        {
            "id": "610302",
            "name": "涪城区",
            "level": "3",
            "parent_id": "6103"
        },
        {
            "id": "610303",
            "name": "游仙区",
            "level": "3",
            "parent_id": "6103"
        },
        {
            "id": "610304",
            "name": "三台县",
            "level": "3",
            "parent_id": "6103"
        },
        {
            "id": "610305",
            "name": "盐亭县",
            "level": "3",
            "parent_id": "6103"
        },
        {
            "id": "610306",
            "name": "安县",
            "level": "3",
            "parent_id": "6103"
        },
        {
            "id": "610307",
            "name": "梓潼县",
            "level": "3",
            "parent_id": "6103"
        },
        {
            "id": "610308",
            "name": "北川县",
            "level": "3",
            "parent_id": "6103"
        },
        {
            "id": "610309",
            "name": "平武县",
            "level": "3",
            "parent_id": "6103"
        },
        {
            "id": "610310",
            "name": "江油市",
            "level": "3",
            "parent_id": "6103"
        },
        {
            "id": "610311",
            "name": "高新区",
            "level": "3",
            "parent_id": "6103"
        },
        {
            "id": "610402",
            "name": "东坡区",
            "level": "3",
            "parent_id": "6104"
        },
        {
            "id": "610403",
            "name": "仁寿县",
            "level": "3",
            "parent_id": "6104"
        },
        {
            "id": "610404",
            "name": "彭山县",
            "level": "3",
            "parent_id": "6104"
        },
        {
            "id": "610405",
            "name": "洪雅县",
            "level": "3",
            "parent_id": "6104"
        },
        {
            "id": "610406",
            "name": "丹棱县",
            "level": "3",
            "parent_id": "6104"
        },
        {
            "id": "610407",
            "name": "青神县",
            "level": "3",
            "parent_id": "6104"
        },
        {
            "id": "610502",
            "name": "江阳区",
            "level": "3",
            "parent_id": "6105"
        },
        {
            "id": "610503",
            "name": "纳溪区",
            "level": "3",
            "parent_id": "6105"
        },
        {
            "id": "610504",
            "name": "龙马潭区",
            "level": "3",
            "parent_id": "6105"
        },
        {
            "id": "610505",
            "name": "泸县",
            "level": "3",
            "parent_id": "6105"
        },
        {
            "id": "610506",
            "name": "合江县",
            "level": "3",
            "parent_id": "6105"
        },
        {
            "id": "610507",
            "name": "叙永县",
            "level": "3",
            "parent_id": "6105"
        },
        {
            "id": "610508",
            "name": "古蔺县",
            "level": "3",
            "parent_id": "6105"
        },
        {
            "id": "610602",
            "name": "顺庆区",
            "level": "3",
            "parent_id": "6106"
        },
        {
            "id": "610603",
            "name": "高坪区",
            "level": "3",
            "parent_id": "6106"
        },
        {
            "id": "610604",
            "name": "嘉陵区",
            "level": "3",
            "parent_id": "6106"
        },
        {
            "id": "610605",
            "name": "南部县",
            "level": "3",
            "parent_id": "6106"
        },
        {
            "id": "610606",
            "name": "营山县",
            "level": "3",
            "parent_id": "6106"
        },
        {
            "id": "610607",
            "name": "蓬安县",
            "level": "3",
            "parent_id": "6106"
        },
        {
            "id": "610608",
            "name": "仪陇县",
            "level": "3",
            "parent_id": "6106"
        },
        {
            "id": "610609",
            "name": "西充县",
            "level": "3",
            "parent_id": "6106"
        },
        {
            "id": "610610",
            "name": "阆中市",
            "level": "3",
            "parent_id": "6106"
        },
        {
            "id": "610702",
            "name": "自流井区",
            "level": "3",
            "parent_id": "6107"
        },
        {
            "id": "610703",
            "name": "贡井区",
            "level": "3",
            "parent_id": "6107"
        },
        {
            "id": "610704",
            "name": "大安区",
            "level": "3",
            "parent_id": "6107"
        },
        {
            "id": "610705",
            "name": "沿滩区",
            "level": "3",
            "parent_id": "6107"
        },
        {
            "id": "610706",
            "name": "荣县",
            "level": "3",
            "parent_id": "6107"
        },
        {
            "id": "610707",
            "name": "富顺县",
            "level": "3",
            "parent_id": "6107"
        },
        {
            "id": "610708",
            "name": "高新区",
            "level": "3",
            "parent_id": "6107"
        },
        {
            "id": "610802",
            "name": "市中区",
            "level": "3",
            "parent_id": "6108"
        },
        {
            "id": "610803",
            "name": "东兴区",
            "level": "3",
            "parent_id": "6108"
        },
        {
            "id": "610804",
            "name": "威远县",
            "level": "3",
            "parent_id": "6108"
        },
        {
            "id": "610805",
            "name": "资中县",
            "level": "3",
            "parent_id": "6108"
        },
        {
            "id": "610806",
            "name": "隆昌县",
            "level": "3",
            "parent_id": "6108"
        },
        {
            "id": "610902",
            "name": "翠屏区",
            "level": "3",
            "parent_id": "6109"
        },
        {
            "id": "610903",
            "name": "宜宾县",
            "level": "3",
            "parent_id": "6109"
        },
        {
            "id": "610904",
            "name": "南溪县",
            "level": "3",
            "parent_id": "6109"
        },
        {
            "id": "610905",
            "name": "江安县",
            "level": "3",
            "parent_id": "6109"
        },
        {
            "id": "610906",
            "name": "长宁县",
            "level": "3",
            "parent_id": "6109"
        },
        {
            "id": "610907",
            "name": "高县",
            "level": "3",
            "parent_id": "6109"
        },
        {
            "id": "610908",
            "name": "珙县",
            "level": "3",
            "parent_id": "6109"
        },
        {
            "id": "610909",
            "name": "筠连县",
            "level": "3",
            "parent_id": "6109"
        },
        {
            "id": "610910",
            "name": "兴文县",
            "level": "3",
            "parent_id": "6109"
        },
        {
            "id": "610911",
            "name": "屏山县",
            "level": "3",
            "parent_id": "6109"
        },
        {
            "id": "611002",
            "name": "市中区",
            "level": "3",
            "parent_id": "6110"
        },
        {
            "id": "611003",
            "name": "沙湾区",
            "level": "3",
            "parent_id": "6110"
        },
        {
            "id": "611004",
            "name": "五通桥区",
            "level": "3",
            "parent_id": "6110"
        },
        {
            "id": "611005",
            "name": "金口河区",
            "level": "3",
            "parent_id": "6110"
        },
        {
            "id": "611006",
            "name": "犍为县",
            "level": "3",
            "parent_id": "6110"
        },
        {
            "id": "611007",
            "name": "井研县",
            "level": "3",
            "parent_id": "6110"
        },
        {
            "id": "611008",
            "name": "夹江县",
            "level": "3",
            "parent_id": "6110"
        },
        {
            "id": "611009",
            "name": "沐川县",
            "level": "3",
            "parent_id": "6110"
        },
        {
            "id": "611010",
            "name": "峨边县",
            "level": "3",
            "parent_id": "6110"
        },
        {
            "id": "611011",
            "name": "马边县",
            "level": "3",
            "parent_id": "6110"
        },
        {
            "id": "611012",
            "name": "峨眉山市",
            "level": "3",
            "parent_id": "6110"
        },
        {
            "id": "611102",
            "name": "雨城区",
            "level": "3",
            "parent_id": "6111"
        },
        {
            "id": "611103",
            "name": "名山县",
            "level": "3",
            "parent_id": "6111"
        },
        {
            "id": "611104",
            "name": "荥经县",
            "level": "3",
            "parent_id": "6111"
        },
        {
            "id": "611105",
            "name": "汉源县",
            "level": "3",
            "parent_id": "6111"
        },
        {
            "id": "611106",
            "name": "石棉县",
            "level": "3",
            "parent_id": "6111"
        },
        {
            "id": "611107",
            "name": "天全县",
            "level": "3",
            "parent_id": "6111"
        },
        {
            "id": "611108",
            "name": "芦山县",
            "level": "3",
            "parent_id": "6111"
        },
        {
            "id": "611109",
            "name": "宝兴县",
            "level": "3",
            "parent_id": "6111"
        },
        {
            "id": "611202",
            "name": "船山区",
            "level": "3",
            "parent_id": "6112"
        },
        {
            "id": "611203",
            "name": "安居区",
            "level": "3",
            "parent_id": "6112"
        },
        {
            "id": "611204",
            "name": "蓬溪县",
            "level": "3",
            "parent_id": "6112"
        },
        {
            "id": "611205",
            "name": "射洪县",
            "level": "3",
            "parent_id": "6112"
        },
        {
            "id": "611206",
            "name": "大英县",
            "level": "3",
            "parent_id": "6112"
        },
        {
            "id": "611302",
            "name": "通川区",
            "level": "3",
            "parent_id": "6113"
        },
        {
            "id": "611303",
            "name": "达县",
            "level": "3",
            "parent_id": "6113"
        },
        {
            "id": "611304",
            "name": "宣汉县",
            "level": "3",
            "parent_id": "6113"
        },
        {
            "id": "611305",
            "name": "开江县",
            "level": "3",
            "parent_id": "6113"
        },
        {
            "id": "611306",
            "name": "大竹县",
            "level": "3",
            "parent_id": "6113"
        },
        {
            "id": "611307",
            "name": "渠县",
            "level": "3",
            "parent_id": "6113"
        },
        {
            "id": "611308",
            "name": "万源市",
            "level": "3",
            "parent_id": "6113"
        },
        {
            "id": "611402",
            "name": "巴州区",
            "level": "3",
            "parent_id": "6114"
        },
        {
            "id": "611403",
            "name": "通江县",
            "level": "3",
            "parent_id": "6114"
        },
        {
            "id": "611404",
            "name": "南江县",
            "level": "3",
            "parent_id": "6114"
        },
        {
            "id": "611405",
            "name": "平昌县",
            "level": "3",
            "parent_id": "6114"
        },
        {
            "id": "611502",
            "name": "市中区",
            "level": "3",
            "parent_id": "6115"
        },
        {
            "id": "611503",
            "name": "元坝区",
            "level": "3",
            "parent_id": "6115"
        },
        {
            "id": "611504",
            "name": "朝天区",
            "level": "3",
            "parent_id": "6115"
        },
        {
            "id": "611505",
            "name": "旺苍县",
            "level": "3",
            "parent_id": "6115"
        },
        {
            "id": "611506",
            "name": "青川县",
            "level": "3",
            "parent_id": "6115"
        },
        {
            "id": "611507",
            "name": "剑阁县",
            "level": "3",
            "parent_id": "6115"
        },
        {
            "id": "611508",
            "name": "苍溪县",
            "level": "3",
            "parent_id": "6115"
        },
        {
            "id": "611602",
            "name": "广安区",
            "level": "3",
            "parent_id": "6116"
        },
        {
            "id": "611603",
            "name": "岳池县",
            "level": "3",
            "parent_id": "6116"
        },
        {
            "id": "611604",
            "name": "武胜县",
            "level": "3",
            "parent_id": "6116"
        },
        {
            "id": "611605",
            "name": "邻水县",
            "level": "3",
            "parent_id": "6116"
        },
        {
            "id": "611606",
            "name": "华蓥市",
            "level": "3",
            "parent_id": "6116"
        },
        {
            "id": "611607",
            "name": "开发区",
            "level": "3",
            "parent_id": "6116"
        },
        {
            "id": "611702",
            "name": "雁江区",
            "level": "3",
            "parent_id": "6117"
        },
        {
            "id": "611703",
            "name": "安岳县",
            "level": "3",
            "parent_id": "6117"
        },
        {
            "id": "611704",
            "name": "乐至县",
            "level": "3",
            "parent_id": "6117"
        },
        {
            "id": "611705",
            "name": "简阳市",
            "level": "3",
            "parent_id": "6117"
        },
        {
            "id": "611801",
            "name": "汶川县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611802",
            "name": "理县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611803",
            "name": "茂县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611804",
            "name": "松潘县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611805",
            "name": "九寨沟县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611806",
            "name": "金川县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611807",
            "name": "小金县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611808",
            "name": "黑水县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611809",
            "name": "马尔康县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611810",
            "name": "壤塘县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611811",
            "name": "阿坝县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611812",
            "name": "若尔盖县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611813",
            "name": "红原县",
            "level": "3",
            "parent_id": "6118"
        },
        {
            "id": "611902",
            "name": "东区",
            "level": "3",
            "parent_id": "6119"
        },
        {
            "id": "611903",
            "name": "西区",
            "level": "3",
            "parent_id": "6119"
        },
        {
            "id": "611904",
            "name": "仁和区",
            "level": "3",
            "parent_id": "6119"
        },
        {
            "id": "611905",
            "name": "米易县",
            "level": "3",
            "parent_id": "6119"
        },
        {
            "id": "611906",
            "name": "盐边县",
            "level": "3",
            "parent_id": "6119"
        },
        {
            "id": "612001",
            "name": "康定县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612002",
            "name": "泸定县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612003",
            "name": "丹巴县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612004",
            "name": "九龙县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612005",
            "name": "雅江县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612006",
            "name": "道孚县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612007",
            "name": "炉霍县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612008",
            "name": "甘孜县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612009",
            "name": "新龙县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612010",
            "name": "德格县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612011",
            "name": "白玉县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612012",
            "name": "石渠县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612013",
            "name": "色达县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612014",
            "name": "理塘县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612015",
            "name": "巴塘县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612016",
            "name": "乡城县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612017",
            "name": "稻城县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612018",
            "name": "得荣县",
            "level": "3",
            "parent_id": "6120"
        },
        {
            "id": "612101",
            "name": "西昌市",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612102",
            "name": "木里县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612103",
            "name": "盐源县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612104",
            "name": "德昌县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612105",
            "name": "会理县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612106",
            "name": "会东县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612107",
            "name": "宁南县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612108",
            "name": "普格县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612109",
            "name": "布拖县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612110",
            "name": "金阳县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612111",
            "name": "昭觉县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612112",
            "name": "喜德县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612113",
            "name": "冕宁县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612114",
            "name": "越西县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612115",
            "name": "甘洛县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612116",
            "name": "美姑县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "612117",
            "name": "雷波县",
            "level": "3",
            "parent_id": "6121"
        },
        {
            "id": "620102",
            "name": "五华区",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620103",
            "name": "盘龙区",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620104",
            "name": "官渡区",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620105",
            "name": "西山区",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620106",
            "name": "东川区",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620107",
            "name": "呈贡县",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620108",
            "name": "晋宁县",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620109",
            "name": "富民县",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620110",
            "name": "宜良县",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620111",
            "name": "石林县",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620112",
            "name": "嵩明县",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620113",
            "name": "禄劝县",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620114",
            "name": "寻甸回族县",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620115",
            "name": "安宁市",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620116",
            "name": "开发区",
            "level": "3",
            "parent_id": "6201"
        },
        {
            "id": "620202",
            "name": "麒麟区",
            "level": "3",
            "parent_id": "6202"
        },
        {
            "id": "620203",
            "name": "马龙县",
            "level": "3",
            "parent_id": "6202"
        },
        {
            "id": "620204",
            "name": "陆良县",
            "level": "3",
            "parent_id": "6202"
        },
        {
            "id": "620205",
            "name": "师宗县",
            "level": "3",
            "parent_id": "6202"
        },
        {
            "id": "620206",
            "name": "罗平县",
            "level": "3",
            "parent_id": "6202"
        },
        {
            "id": "620207",
            "name": "富源县",
            "level": "3",
            "parent_id": "6202"
        },
        {
            "id": "620208",
            "name": "会泽县",
            "level": "3",
            "parent_id": "6202"
        },
        {
            "id": "620209",
            "name": "沾益县",
            "level": "3",
            "parent_id": "6202"
        },
        {
            "id": "620210",
            "name": "宣威市",
            "level": "3",
            "parent_id": "6202"
        },
        {
            "id": "620211",
            "name": "开发区",
            "level": "3",
            "parent_id": "6202"
        },
        {
            "id": "620302",
            "name": "红塔区",
            "level": "3",
            "parent_id": "6203"
        },
        {
            "id": "620303",
            "name": "江川县",
            "level": "3",
            "parent_id": "6203"
        },
        {
            "id": "620304",
            "name": "澄江县",
            "level": "3",
            "parent_id": "6203"
        },
        {
            "id": "620305",
            "name": "通海县",
            "level": "3",
            "parent_id": "6203"
        },
        {
            "id": "620306",
            "name": "华宁县",
            "level": "3",
            "parent_id": "6203"
        },
        {
            "id": "620307",
            "name": "易门县",
            "level": "3",
            "parent_id": "6203"
        },
        {
            "id": "620308",
            "name": "峨山县",
            "level": "3",
            "parent_id": "6203"
        },
        {
            "id": "620309",
            "name": "新平县",
            "level": "3",
            "parent_id": "6203"
        },
        {
            "id": "620310",
            "name": "元江哈尼族县",
            "level": "3",
            "parent_id": "6203"
        },
        {
            "id": "620402",
            "name": "昭阳区",
            "level": "3",
            "parent_id": "6204"
        },
        {
            "id": "620403",
            "name": "鲁甸县",
            "level": "3",
            "parent_id": "6204"
        },
        {
            "id": "620404",
            "name": "巧家县",
            "level": "3",
            "parent_id": "6204"
        },
        {
            "id": "620405",
            "name": "盐津县",
            "level": "3",
            "parent_id": "6204"
        },
        {
            "id": "620406",
            "name": "大关县",
            "level": "3",
            "parent_id": "6204"
        },
        {
            "id": "620407",
            "name": "永善县",
            "level": "3",
            "parent_id": "6204"
        },
        {
            "id": "620408",
            "name": "绥江县",
            "level": "3",
            "parent_id": "6204"
        },
        {
            "id": "620409",
            "name": "镇雄县",
            "level": "3",
            "parent_id": "6204"
        },
        {
            "id": "620410",
            "name": "彝良县",
            "level": "3",
            "parent_id": "6204"
        },
        {
            "id": "620411",
            "name": "威信县",
            "level": "3",
            "parent_id": "6204"
        },
        {
            "id": "620412",
            "name": "水富县",
            "level": "3",
            "parent_id": "6204"
        },
        {
            "id": "620501",
            "name": "楚雄市",
            "level": "3",
            "parent_id": "6205"
        },
        {
            "id": "620502",
            "name": "双柏县",
            "level": "3",
            "parent_id": "6205"
        },
        {
            "id": "620503",
            "name": "牟定县",
            "level": "3",
            "parent_id": "6205"
        },
        {
            "id": "620504",
            "name": "南华县",
            "level": "3",
            "parent_id": "6205"
        },
        {
            "id": "620505",
            "name": "姚安县",
            "level": "3",
            "parent_id": "6205"
        },
        {
            "id": "620506",
            "name": "大姚县",
            "level": "3",
            "parent_id": "6205"
        },
        {
            "id": "620507",
            "name": "永仁县",
            "level": "3",
            "parent_id": "6205"
        },
        {
            "id": "620508",
            "name": "元谋县",
            "level": "3",
            "parent_id": "6205"
        },
        {
            "id": "620509",
            "name": "武定县",
            "level": "3",
            "parent_id": "6205"
        },
        {
            "id": "620510",
            "name": "禄丰县",
            "level": "3",
            "parent_id": "6205"
        },
        {
            "id": "620601",
            "name": "个旧市",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620602",
            "name": "开远市",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620603",
            "name": "蒙自县",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620604",
            "name": "屏边县",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620605",
            "name": "建水县",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620606",
            "name": "石屏县",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620607",
            "name": "弥勒县",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620608",
            "name": "泸西县",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620609",
            "name": "元阳县",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620610",
            "name": "红河县",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620611",
            "name": "金平县",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620612",
            "name": "绿春县",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620613",
            "name": "河口县",
            "level": "3",
            "parent_id": "6206"
        },
        {
            "id": "620702",
            "name": "古城区",
            "level": "3",
            "parent_id": "6207"
        },
        {
            "id": "620703",
            "name": "玉龙县",
            "level": "3",
            "parent_id": "6207"
        },
        {
            "id": "620704",
            "name": "永胜县",
            "level": "3",
            "parent_id": "6207"
        },
        {
            "id": "620705",
            "name": "华坪县",
            "level": "3",
            "parent_id": "6207"
        },
        {
            "id": "620706",
            "name": "宁蒗县",
            "level": "3",
            "parent_id": "6207"
        },
        {
            "id": "620801",
            "name": "香格里拉县",
            "level": "3",
            "parent_id": "6208"
        },
        {
            "id": "620802",
            "name": "德钦县",
            "level": "3",
            "parent_id": "6208"
        },
        {
            "id": "620803",
            "name": "维西县",
            "level": "3",
            "parent_id": "6208"
        },
        {
            "id": "620901",
            "name": "文山县",
            "level": "3",
            "parent_id": "6209"
        },
        {
            "id": "620902",
            "name": "砚山县",
            "level": "3",
            "parent_id": "6209"
        },
        {
            "id": "620903",
            "name": "西畴县",
            "level": "3",
            "parent_id": "6209"
        },
        {
            "id": "620904",
            "name": "麻栗坡县",
            "level": "3",
            "parent_id": "6209"
        },
        {
            "id": "620905",
            "name": "马关县",
            "level": "3",
            "parent_id": "6209"
        },
        {
            "id": "620906",
            "name": "丘北县",
            "level": "3",
            "parent_id": "6209"
        },
        {
            "id": "620907",
            "name": "广南县",
            "level": "3",
            "parent_id": "6209"
        },
        {
            "id": "620908",
            "name": "富宁县",
            "level": "3",
            "parent_id": "6209"
        },
        {
            "id": "621001",
            "name": "景洪市",
            "level": "3",
            "parent_id": "6210"
        },
        {
            "id": "621002",
            "name": "勐海县",
            "level": "3",
            "parent_id": "6210"
        },
        {
            "id": "621003",
            "name": "勐腊县",
            "level": "3",
            "parent_id": "6210"
        },
        {
            "id": "621102",
            "name": "思茅区",
            "level": "3",
            "parent_id": "6211"
        },
        {
            "id": "621103",
            "name": "宁洱哈尼族县",
            "level": "3",
            "parent_id": "6211"
        },
        {
            "id": "621104",
            "name": "墨江县",
            "level": "3",
            "parent_id": "6211"
        },
        {
            "id": "621105",
            "name": "景东县",
            "level": "3",
            "parent_id": "6211"
        },
        {
            "id": "621106",
            "name": "景谷傣族县",
            "level": "3",
            "parent_id": "6211"
        },
        {
            "id": "621107",
            "name": "镇沅县",
            "level": "3",
            "parent_id": "6211"
        },
        {
            "id": "621108",
            "name": "江城哈尼族县",
            "level": "3",
            "parent_id": "6211"
        },
        {
            "id": "621109",
            "name": "孟连县",
            "level": "3",
            "parent_id": "6211"
        },
        {
            "id": "621110",
            "name": "澜沧县",
            "level": "3",
            "parent_id": "6211"
        },
        {
            "id": "621111",
            "name": "西盟县",
            "level": "3",
            "parent_id": "6211"
        },
        {
            "id": "621201",
            "name": "大理市",
            "level": "3",
            "parent_id": "6212"
        },
        {
            "id": "621202",
            "name": "漾濞县",
            "level": "3",
            "parent_id": "6212"
        },
        {
            "id": "621203",
            "name": "祥云县",
            "level": "3",
            "parent_id": "6212"
        },
        {
            "id": "621204",
            "name": "宾川县",
            "level": "3",
            "parent_id": "6212"
        },
        {
            "id": "621205",
            "name": "弥渡县",
            "level": "3",
            "parent_id": "6212"
        },
        {
            "id": "621206",
            "name": "南涧县",
            "level": "3",
            "parent_id": "6212"
        },
        {
            "id": "621207",
            "name": "巍山彝族县",
            "level": "3",
            "parent_id": "6212"
        },
        {
            "id": "621208",
            "name": "永平县",
            "level": "3",
            "parent_id": "6212"
        },
        {
            "id": "621209",
            "name": "云龙县",
            "level": "3",
            "parent_id": "6212"
        },
        {
            "id": "621210",
            "name": "洱源县",
            "level": "3",
            "parent_id": "6212"
        },
        {
            "id": "621211",
            "name": "剑川县",
            "level": "3",
            "parent_id": "6212"
        },
        {
            "id": "621212",
            "name": "鹤庆县",
            "level": "3",
            "parent_id": "6212"
        },
        {
            "id": "621302",
            "name": "隆阳区",
            "level": "3",
            "parent_id": "6213"
        },
        {
            "id": "621303",
            "name": "施甸县",
            "level": "3",
            "parent_id": "6213"
        },
        {
            "id": "621304",
            "name": "腾冲县",
            "level": "3",
            "parent_id": "6213"
        },
        {
            "id": "621305",
            "name": "龙陵县",
            "level": "3",
            "parent_id": "6213"
        },
        {
            "id": "621306",
            "name": "昌宁县",
            "level": "3",
            "parent_id": "6213"
        },
        {
            "id": "621401",
            "name": "瑞丽市",
            "level": "3",
            "parent_id": "6214"
        },
        {
            "id": "621402",
            "name": "潞西市",
            "level": "3",
            "parent_id": "6214"
        },
        {
            "id": "621403",
            "name": "梁河县",
            "level": "3",
            "parent_id": "6214"
        },
        {
            "id": "621404",
            "name": "盈江县",
            "level": "3",
            "parent_id": "6214"
        },
        {
            "id": "621405",
            "name": "陇川县",
            "level": "3",
            "parent_id": "6214"
        },
        {
            "id": "621501",
            "name": "泸水县",
            "level": "3",
            "parent_id": "6215"
        },
        {
            "id": "621502",
            "name": "福贡县",
            "level": "3",
            "parent_id": "6215"
        },
        {
            "id": "621503",
            "name": "贡山县",
            "level": "3",
            "parent_id": "6215"
        },
        {
            "id": "621504",
            "name": "兰坪县",
            "level": "3",
            "parent_id": "6215"
        },
        {
            "id": "621602",
            "name": "临翔区",
            "level": "3",
            "parent_id": "6216"
        },
        {
            "id": "621603",
            "name": "凤庆县",
            "level": "3",
            "parent_id": "6216"
        },
        {
            "id": "621604",
            "name": "云县",
            "level": "3",
            "parent_id": "6216"
        },
        {
            "id": "621605",
            "name": "永德县",
            "level": "3",
            "parent_id": "6216"
        },
        {
            "id": "621606",
            "name": "镇康县",
            "level": "3",
            "parent_id": "6216"
        },
        {
            "id": "621607",
            "name": "双江县",
            "level": "3",
            "parent_id": "6216"
        },
        {
            "id": "621608",
            "name": "耿马傣族县",
            "level": "3",
            "parent_id": "6216"
        },
        {
            "id": "621609",
            "name": "沧源县",
            "level": "3",
            "parent_id": "6216"
        },
        {
            "id": "630102",
            "name": "南明区",
            "level": "3",
            "parent_id": "6301"
        },
        {
            "id": "630103",
            "name": "云岩区",
            "level": "3",
            "parent_id": "6301"
        },
        {
            "id": "630104",
            "name": "花溪区",
            "level": "3",
            "parent_id": "6301"
        },
        {
            "id": "630105",
            "name": "乌当区",
            "level": "3",
            "parent_id": "6301"
        },
        {
            "id": "630106",
            "name": "白云区",
            "level": "3",
            "parent_id": "6301"
        },
        {
            "id": "630107",
            "name": "小河区",
            "level": "3",
            "parent_id": "6301"
        },
        {
            "id": "630108",
            "name": "开阳县",
            "level": "3",
            "parent_id": "6301"
        },
        {
            "id": "630109",
            "name": "息烽县",
            "level": "3",
            "parent_id": "6301"
        },
        {
            "id": "630110",
            "name": "修文县",
            "level": "3",
            "parent_id": "6301"
        },
        {
            "id": "630111",
            "name": "清镇市",
            "level": "3",
            "parent_id": "6301"
        },
        {
            "id": "630112",
            "name": "开发区",
            "level": "3",
            "parent_id": "6301"
        },
        {
            "id": "630202",
            "name": "红花岗区",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630203",
            "name": "汇川区",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630204",
            "name": "遵义县",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630205",
            "name": "桐梓县",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630206",
            "name": "绥阳县",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630207",
            "name": "正安县",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630208",
            "name": "道真仡佬族县",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630209",
            "name": "务川仡佬族县",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630210",
            "name": "凤冈县",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630211",
            "name": "湄潭县",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630212",
            "name": "余庆县",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630213",
            "name": "习水县",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630214",
            "name": "赤水市",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630215",
            "name": "仁怀市",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630216",
            "name": "开发区",
            "level": "3",
            "parent_id": "6302"
        },
        {
            "id": "630301",
            "name": "钟山区",
            "level": "3",
            "parent_id": "6303"
        },
        {
            "id": "630302",
            "name": "六枝特区",
            "level": "3",
            "parent_id": "6303"
        },
        {
            "id": "630303",
            "name": "水城县",
            "level": "3",
            "parent_id": "6303"
        },
        {
            "id": "630304",
            "name": "盘县",
            "level": "3",
            "parent_id": "6303"
        },
        {
            "id": "630402",
            "name": "西秀区",
            "level": "3",
            "parent_id": "6304"
        },
        {
            "id": "630403",
            "name": "平坝县",
            "level": "3",
            "parent_id": "6304"
        },
        {
            "id": "630404",
            "name": "普定县",
            "level": "3",
            "parent_id": "6304"
        },
        {
            "id": "630405",
            "name": "镇宁布依族县",
            "level": "3",
            "parent_id": "6304"
        },
        {
            "id": "630406",
            "name": "关岭布依族县",
            "level": "3",
            "parent_id": "6304"
        },
        {
            "id": "630407",
            "name": "紫云县",
            "level": "3",
            "parent_id": "6304"
        },
        {
            "id": "630501",
            "name": "兴义市",
            "level": "3",
            "parent_id": "6305"
        },
        {
            "id": "630502",
            "name": "兴仁县",
            "level": "3",
            "parent_id": "6305"
        },
        {
            "id": "630503",
            "name": "普安县",
            "level": "3",
            "parent_id": "6305"
        },
        {
            "id": "630504",
            "name": "晴隆县",
            "level": "3",
            "parent_id": "6305"
        },
        {
            "id": "630505",
            "name": "贞丰县",
            "level": "3",
            "parent_id": "6305"
        },
        {
            "id": "630506",
            "name": "望谟县",
            "level": "3",
            "parent_id": "6305"
        },
        {
            "id": "630507",
            "name": "册亨县",
            "level": "3",
            "parent_id": "6305"
        },
        {
            "id": "630508",
            "name": "安龙县",
            "level": "3",
            "parent_id": "6305"
        },
        {
            "id": "630601",
            "name": "都匀市",
            "level": "3",
            "parent_id": "6306"
        },
        {
            "id": "630602",
            "name": "福泉市",
            "level": "3",
            "parent_id": "6306"
        },
        {
            "id": "630603",
            "name": "荔波县",
            "level": "3",
            "parent_id": "6306"
        },
        {
            "id": "630604",
            "name": "贵定县",
            "level": "3",
            "parent_id": "6306"
        },
        {
            "id": "630605",
            "name": "瓮安县",
            "level": "3",
            "parent_id": "6306"
        },
        {
            "id": "630606",
            "name": "独山县",
            "level": "3",
            "parent_id": "6306"
        },
        {
            "id": "630607",
            "name": "平塘县",
            "level": "3",
            "parent_id": "6306"
        },
        {
            "id": "630608",
            "name": "罗甸县",
            "level": "3",
            "parent_id": "6306"
        },
        {
            "id": "630609",
            "name": "长顺县",
            "level": "3",
            "parent_id": "6306"
        },
        {
            "id": "630610",
            "name": "龙里县",
            "level": "3",
            "parent_id": "6306"
        },
        {
            "id": "630611",
            "name": "惠水县",
            "level": "3",
            "parent_id": "6306"
        },
        {
            "id": "630612",
            "name": "三都县",
            "level": "3",
            "parent_id": "6306"
        },
        {
            "id": "630701",
            "name": "铜仁市",
            "level": "3",
            "parent_id": "6307"
        },
        {
            "id": "630702",
            "name": "江口县",
            "level": "3",
            "parent_id": "6307"
        },
        {
            "id": "630703",
            "name": "玉屏县",
            "level": "3",
            "parent_id": "6307"
        },
        {
            "id": "630704",
            "name": "石阡县",
            "level": "3",
            "parent_id": "6307"
        },
        {
            "id": "630705",
            "name": "思南县",
            "level": "3",
            "parent_id": "6307"
        },
        {
            "id": "630706",
            "name": "印江县",
            "level": "3",
            "parent_id": "6307"
        },
        {
            "id": "630707",
            "name": "德江县",
            "level": "3",
            "parent_id": "6307"
        },
        {
            "id": "630708",
            "name": "沿河县",
            "level": "3",
            "parent_id": "6307"
        },
        {
            "id": "630709",
            "name": "松桃县",
            "level": "3",
            "parent_id": "6307"
        },
        {
            "id": "630710",
            "name": "万山特区",
            "level": "3",
            "parent_id": "6307"
        },
        {
            "id": "630801",
            "name": "毕节市",
            "level": "3",
            "parent_id": "6308"
        },
        {
            "id": "630802",
            "name": "大方县",
            "level": "3",
            "parent_id": "6308"
        },
        {
            "id": "630803",
            "name": "黔西县",
            "level": "3",
            "parent_id": "6308"
        },
        {
            "id": "630804",
            "name": "金沙县",
            "level": "3",
            "parent_id": "6308"
        },
        {
            "id": "630805",
            "name": "织金县",
            "level": "3",
            "parent_id": "6308"
        },
        {
            "id": "630806",
            "name": "纳雍县",
            "level": "3",
            "parent_id": "6308"
        },
        {
            "id": "630807",
            "name": "威宁县",
            "level": "3",
            "parent_id": "6308"
        },
        {
            "id": "630808",
            "name": "赫章县",
            "level": "3",
            "parent_id": "6308"
        },
        {
            "id": "630901",
            "name": "凯里市",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630902",
            "name": "黄平县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630903",
            "name": "施秉县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630904",
            "name": "三穗县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630905",
            "name": "镇远县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630906",
            "name": "岑巩县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630907",
            "name": "天柱县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630908",
            "name": "锦屏县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630909",
            "name": "剑河县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630910",
            "name": "台江县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630911",
            "name": "黎平县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630912",
            "name": "榕江县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630913",
            "name": "从江县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630914",
            "name": "雷山县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630915",
            "name": "麻江县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "630916",
            "name": "丹寨县",
            "level": "3",
            "parent_id": "6309"
        },
        {
            "id": "640102",
            "name": "城关区",
            "level": "3",
            "parent_id": "6401"
        },
        {
            "id": "640103",
            "name": "林周县",
            "level": "3",
            "parent_id": "6401"
        },
        {
            "id": "640104",
            "name": "当雄县",
            "level": "3",
            "parent_id": "6401"
        },
        {
            "id": "640105",
            "name": "尼木县",
            "level": "3",
            "parent_id": "6401"
        },
        {
            "id": "640106",
            "name": "曲水县",
            "level": "3",
            "parent_id": "6401"
        },
        {
            "id": "640107",
            "name": "堆龙德庆县",
            "level": "3",
            "parent_id": "6401"
        },
        {
            "id": "640108",
            "name": "达孜县",
            "level": "3",
            "parent_id": "6401"
        },
        {
            "id": "640109",
            "name": "墨竹工卡县",
            "level": "3",
            "parent_id": "6401"
        },
        {
            "id": "640110",
            "name": "开发区",
            "level": "3",
            "parent_id": "6401"
        },
        {
            "id": "640201",
            "name": "日喀则市",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640202",
            "name": "南木林县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640203",
            "name": "江孜县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640204",
            "name": "定日县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640205",
            "name": "萨迦县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640206",
            "name": "拉孜县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640207",
            "name": "昂仁县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640208",
            "name": "谢通门县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640209",
            "name": "白朗县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640210",
            "name": "仁布县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640211",
            "name": "康马县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640212",
            "name": "定结县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640213",
            "name": "仲巴县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640214",
            "name": "亚东县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640215",
            "name": "吉隆县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640216",
            "name": "聂拉木县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640217",
            "name": "萨嘎县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640218",
            "name": "岗巴县",
            "level": "3",
            "parent_id": "6402"
        },
        {
            "id": "640301",
            "name": "乃东县",
            "level": "3",
            "parent_id": "6403"
        },
        {
            "id": "640302",
            "name": "扎囊县",
            "level": "3",
            "parent_id": "6403"
        },
        {
            "id": "640303",
            "name": "贡嘎县",
            "level": "3",
            "parent_id": "6403"
        },
        {
            "id": "640304",
            "name": "桑日县",
            "level": "3",
            "parent_id": "6403"
        },
        {
            "id": "640305",
            "name": "琼结县",
            "level": "3",
            "parent_id": "6403"
        },
        {
            "id": "640306",
            "name": "曲松县",
            "level": "3",
            "parent_id": "6403"
        },
        {
            "id": "640307",
            "name": "措美县",
            "level": "3",
            "parent_id": "6403"
        },
        {
            "id": "640308",
            "name": "洛扎县",
            "level": "3",
            "parent_id": "6403"
        },
        {
            "id": "640309",
            "name": "加查县",
            "level": "3",
            "parent_id": "6403"
        },
        {
            "id": "640310",
            "name": "隆子县",
            "level": "3",
            "parent_id": "6403"
        },
        {
            "id": "640311",
            "name": "错那县",
            "level": "3",
            "parent_id": "6403"
        },
        {
            "id": "640312",
            "name": "浪卡子县",
            "level": "3",
            "parent_id": "6403"
        },
        {
            "id": "640401",
            "name": "林芝县",
            "level": "3",
            "parent_id": "6404"
        },
        {
            "id": "640402",
            "name": "工布江达县",
            "level": "3",
            "parent_id": "6404"
        },
        {
            "id": "640403",
            "name": "米林县",
            "level": "3",
            "parent_id": "6404"
        },
        {
            "id": "640404",
            "name": "墨脱县",
            "level": "3",
            "parent_id": "6404"
        },
        {
            "id": "640405",
            "name": "波密县",
            "level": "3",
            "parent_id": "6404"
        },
        {
            "id": "640406",
            "name": "察隅县",
            "level": "3",
            "parent_id": "6404"
        },
        {
            "id": "640407",
            "name": "朗县",
            "level": "3",
            "parent_id": "6404"
        },
        {
            "id": "640501",
            "name": "昌都县",
            "level": "3",
            "parent_id": "6405"
        },
        {
            "id": "640502",
            "name": "江达县",
            "level": "3",
            "parent_id": "6405"
        },
        {
            "id": "640503",
            "name": "贡觉县",
            "level": "3",
            "parent_id": "6405"
        },
        {
            "id": "640504",
            "name": "类乌齐县",
            "level": "3",
            "parent_id": "6405"
        },
        {
            "id": "640505",
            "name": "丁青县",
            "level": "3",
            "parent_id": "6405"
        },
        {
            "id": "640506",
            "name": "察雅县",
            "level": "3",
            "parent_id": "6405"
        },
        {
            "id": "640507",
            "name": "八宿县",
            "level": "3",
            "parent_id": "6405"
        },
        {
            "id": "640508",
            "name": "左贡县",
            "level": "3",
            "parent_id": "6405"
        },
        {
            "id": "640509",
            "name": "芒康县",
            "level": "3",
            "parent_id": "6405"
        },
        {
            "id": "640510",
            "name": "洛隆县",
            "level": "3",
            "parent_id": "6405"
        },
        {
            "id": "640511",
            "name": "边坝县",
            "level": "3",
            "parent_id": "6405"
        },
        {
            "id": "640601",
            "name": "那曲县",
            "level": "3",
            "parent_id": "6406"
        },
        {
            "id": "640602",
            "name": "嘉黎县",
            "level": "3",
            "parent_id": "6406"
        },
        {
            "id": "640603",
            "name": "比如县",
            "level": "3",
            "parent_id": "6406"
        },
        {
            "id": "640604",
            "name": "聂荣县",
            "level": "3",
            "parent_id": "6406"
        },
        {
            "id": "640605",
            "name": "安多县",
            "level": "3",
            "parent_id": "6406"
        },
        {
            "id": "640606",
            "name": "申扎县",
            "level": "3",
            "parent_id": "6406"
        },
        {
            "id": "640607",
            "name": "索县",
            "level": "3",
            "parent_id": "6406"
        },
        {
            "id": "640608",
            "name": "班戈县",
            "level": "3",
            "parent_id": "6406"
        },
        {
            "id": "640609",
            "name": "巴青县",
            "level": "3",
            "parent_id": "6406"
        },
        {
            "id": "640610",
            "name": "尼玛县",
            "level": "3",
            "parent_id": "6406"
        },
        {
            "id": "640701",
            "name": "普兰县",
            "level": "3",
            "parent_id": "6407"
        },
        {
            "id": "640702",
            "name": "札达县",
            "level": "3",
            "parent_id": "6407"
        },
        {
            "id": "640703",
            "name": "噶尔县",
            "level": "3",
            "parent_id": "6407"
        },
        {
            "id": "640704",
            "name": "日土县",
            "level": "3",
            "parent_id": "6407"
        },
        {
            "id": "640705",
            "name": "革吉县",
            "level": "3",
            "parent_id": "6407"
        },
        {
            "id": "640706",
            "name": "改则县",
            "level": "3",
            "parent_id": "6407"
        },
        {
            "id": "640707",
            "name": "措勤县",
            "level": "3",
            "parent_id": "6407"
        },
        {
            "id": "700102",
            "name": "中原区",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700103",
            "name": "二七区",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700104",
            "name": "管城回族区",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700105",
            "name": "金水区",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700106",
            "name": "上街区",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700107",
            "name": "惠济区",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700108",
            "name": "中牟县",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700109",
            "name": "巩义市",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700110",
            "name": "荥阳市",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700111",
            "name": "新密市",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700112",
            "name": "新郑市",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700113",
            "name": "登封市",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700114",
            "name": "经济开发区",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700115",
            "name": "郑东新区",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700116",
            "name": "高新区",
            "level": "3",
            "parent_id": "7001"
        },
        {
            "id": "700202",
            "name": "老城区",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700203",
            "name": "西工区",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700204",
            "name": "瀍河回族区",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700205",
            "name": "涧西区",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700206",
            "name": "吉利区",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700207",
            "name": "洛龙区",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700208",
            "name": "孟津县",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700209",
            "name": "新安县",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700210",
            "name": "栾川县",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700211",
            "name": "嵩县",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700212",
            "name": "汝阳县",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700213",
            "name": "宜阳县",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700214",
            "name": "洛宁县",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700215",
            "name": "伊川县",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700216",
            "name": "偃师市",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700217",
            "name": "高新区",
            "level": "3",
            "parent_id": "7002"
        },
        {
            "id": "700302",
            "name": "龙亭区",
            "level": "3",
            "parent_id": "7003"
        },
        {
            "id": "700303",
            "name": "顺河回族区",
            "level": "3",
            "parent_id": "7003"
        },
        {
            "id": "700304",
            "name": "鼓楼区",
            "level": "3",
            "parent_id": "7003"
        },
        {
            "id": "700305",
            "name": "禹王台区",
            "level": "3",
            "parent_id": "7003"
        },
        {
            "id": "700306",
            "name": "金明区",
            "level": "3",
            "parent_id": "7003"
        },
        {
            "id": "700307",
            "name": "杞县",
            "level": "3",
            "parent_id": "7003"
        },
        {
            "id": "700308",
            "name": "通许县",
            "level": "3",
            "parent_id": "7003"
        },
        {
            "id": "700309",
            "name": "尉氏县",
            "level": "3",
            "parent_id": "7003"
        },
        {
            "id": "700310",
            "name": "开封县",
            "level": "3",
            "parent_id": "7003"
        },
        {
            "id": "700311",
            "name": "兰考县",
            "level": "3",
            "parent_id": "7003"
        },
        {
            "id": "700312",
            "name": "开发区",
            "level": "3",
            "parent_id": "7003"
        },
        {
            "id": "700402",
            "name": "文峰区",
            "level": "3",
            "parent_id": "7004"
        },
        {
            "id": "700403",
            "name": "北关区",
            "level": "3",
            "parent_id": "7004"
        },
        {
            "id": "700404",
            "name": "殷都区",
            "level": "3",
            "parent_id": "7004"
        },
        {
            "id": "700405",
            "name": "龙安区",
            "level": "3",
            "parent_id": "7004"
        },
        {
            "id": "700406",
            "name": "安阳县",
            "level": "3",
            "parent_id": "7004"
        },
        {
            "id": "700407",
            "name": "汤阴县",
            "level": "3",
            "parent_id": "7004"
        },
        {
            "id": "700408",
            "name": "滑县",
            "level": "3",
            "parent_id": "7004"
        },
        {
            "id": "700409",
            "name": "内黄县",
            "level": "3",
            "parent_id": "7004"
        },
        {
            "id": "700410",
            "name": "林州市",
            "level": "3",
            "parent_id": "7004"
        },
        {
            "id": "700411",
            "name": "高新区",
            "level": "3",
            "parent_id": "7004"
        },
        {
            "id": "700502",
            "name": "红旗区",
            "level": "3",
            "parent_id": "7005"
        },
        {
            "id": "700503",
            "name": "卫滨区",
            "level": "3",
            "parent_id": "7005"
        },
        {
            "id": "700504",
            "name": "凤泉区",
            "level": "3",
            "parent_id": "7005"
        },
        {
            "id": "700505",
            "name": "牧野区",
            "level": "3",
            "parent_id": "7005"
        },
        {
            "id": "700506",
            "name": "新乡县",
            "level": "3",
            "parent_id": "7005"
        },
        {
            "id": "700507",
            "name": "获嘉县",
            "level": "3",
            "parent_id": "7005"
        },
        {
            "id": "700508",
            "name": "原阳县",
            "level": "3",
            "parent_id": "7005"
        },
        {
            "id": "700509",
            "name": "延津县",
            "level": "3",
            "parent_id": "7005"
        },
        {
            "id": "700510",
            "name": "封丘县",
            "level": "3",
            "parent_id": "7005"
        },
        {
            "id": "700511",
            "name": "长垣县",
            "level": "3",
            "parent_id": "7005"
        },
        {
            "id": "700512",
            "name": "卫辉市",
            "level": "3",
            "parent_id": "7005"
        },
        {
            "id": "700513",
            "name": "辉县市",
            "level": "3",
            "parent_id": "7005"
        },
        {
            "id": "700602",
            "name": "华龙区",
            "level": "3",
            "parent_id": "7006"
        },
        {
            "id": "700603",
            "name": "清丰县",
            "level": "3",
            "parent_id": "7006"
        },
        {
            "id": "700604",
            "name": "南乐县",
            "level": "3",
            "parent_id": "7006"
        },
        {
            "id": "700605",
            "name": "范县",
            "level": "3",
            "parent_id": "7006"
        },
        {
            "id": "700606",
            "name": "台前县",
            "level": "3",
            "parent_id": "7006"
        },
        {
            "id": "700607",
            "name": "濮阳县",
            "level": "3",
            "parent_id": "7006"
        },
        {
            "id": "700702",
            "name": "解放区",
            "level": "3",
            "parent_id": "7007"
        },
        {
            "id": "700703",
            "name": "中站区",
            "level": "3",
            "parent_id": "7007"
        },
        {
            "id": "700704",
            "name": "马村区",
            "level": "3",
            "parent_id": "7007"
        },
        {
            "id": "700705",
            "name": "山阳区",
            "level": "3",
            "parent_id": "7007"
        },
        {
            "id": "700706",
            "name": "修武县",
            "level": "3",
            "parent_id": "7007"
        },
        {
            "id": "700707",
            "name": "博爱县",
            "level": "3",
            "parent_id": "7007"
        },
        {
            "id": "700708",
            "name": "武陟县",
            "level": "3",
            "parent_id": "7007"
        },
        {
            "id": "700709",
            "name": "温县",
            "level": "3",
            "parent_id": "7007"
        },
        {
            "id": "700710",
            "name": "沁阳市",
            "level": "3",
            "parent_id": "7007"
        },
        {
            "id": "700711",
            "name": "孟州市",
            "level": "3",
            "parent_id": "7007"
        },
        {
            "id": "700802",
            "name": "鹤山区",
            "level": "3",
            "parent_id": "7008"
        },
        {
            "id": "700803",
            "name": "山城区",
            "level": "3",
            "parent_id": "7008"
        },
        {
            "id": "700804",
            "name": "淇滨区",
            "level": "3",
            "parent_id": "7008"
        },
        {
            "id": "700805",
            "name": "浚县",
            "level": "3",
            "parent_id": "7008"
        },
        {
            "id": "700806",
            "name": "淇县",
            "level": "3",
            "parent_id": "7008"
        },
        {
            "id": "700807",
            "name": "开发区",
            "level": "3",
            "parent_id": "7008"
        },
        {
            "id": "700902",
            "name": "湖滨区",
            "level": "3",
            "parent_id": "7009"
        },
        {
            "id": "700903",
            "name": "渑池县",
            "level": "3",
            "parent_id": "7009"
        },
        {
            "id": "700904",
            "name": "陕县",
            "level": "3",
            "parent_id": "7009"
        },
        {
            "id": "700905",
            "name": "卢氏县",
            "level": "3",
            "parent_id": "7009"
        },
        {
            "id": "700906",
            "name": "义马市",
            "level": "3",
            "parent_id": "7009"
        },
        {
            "id": "700907",
            "name": "灵宝市",
            "level": "3",
            "parent_id": "7009"
        },
        {
            "id": "701002",
            "name": "梁园区",
            "level": "3",
            "parent_id": "7010"
        },
        {
            "id": "701003",
            "name": "睢阳区",
            "level": "3",
            "parent_id": "7010"
        },
        {
            "id": "701004",
            "name": "民权县",
            "level": "3",
            "parent_id": "7010"
        },
        {
            "id": "701005",
            "name": "睢县",
            "level": "3",
            "parent_id": "7010"
        },
        {
            "id": "701006",
            "name": "宁陵县",
            "level": "3",
            "parent_id": "7010"
        },
        {
            "id": "701007",
            "name": "柘城县",
            "level": "3",
            "parent_id": "7010"
        },
        {
            "id": "701008",
            "name": "虞城县",
            "level": "3",
            "parent_id": "7010"
        },
        {
            "id": "701009",
            "name": "夏邑县",
            "level": "3",
            "parent_id": "7010"
        },
        {
            "id": "701010",
            "name": "永城市",
            "level": "3",
            "parent_id": "7010"
        },
        {
            "id": "701102",
            "name": "魏都区",
            "level": "3",
            "parent_id": "7011"
        },
        {
            "id": "701103",
            "name": "许昌县",
            "level": "3",
            "parent_id": "7011"
        },
        {
            "id": "701104",
            "name": "鄢陵县",
            "level": "3",
            "parent_id": "7011"
        },
        {
            "id": "701105",
            "name": "襄城县",
            "level": "3",
            "parent_id": "7011"
        },
        {
            "id": "701106",
            "name": "禹州市",
            "level": "3",
            "parent_id": "7011"
        },
        {
            "id": "701107",
            "name": "长葛市",
            "level": "3",
            "parent_id": "7011"
        },
        {
            "id": "701108",
            "name": "开发区",
            "level": "3",
            "parent_id": "7011"
        },
        {
            "id": "701202",
            "name": "源汇区",
            "level": "3",
            "parent_id": "7012"
        },
        {
            "id": "701203",
            "name": "郾城区",
            "level": "3",
            "parent_id": "7012"
        },
        {
            "id": "701204",
            "name": "召陵区",
            "level": "3",
            "parent_id": "7012"
        },
        {
            "id": "701205",
            "name": "舞阳县",
            "level": "3",
            "parent_id": "7012"
        },
        {
            "id": "701206",
            "name": "临颍县",
            "level": "3",
            "parent_id": "7012"
        },
        {
            "id": "701207",
            "name": "开发区",
            "level": "3",
            "parent_id": "7012"
        },
        {
            "id": "701302",
            "name": "新华区",
            "level": "3",
            "parent_id": "7013"
        },
        {
            "id": "701303",
            "name": "卫东区",
            "level": "3",
            "parent_id": "7013"
        },
        {
            "id": "701304",
            "name": "石龙区",
            "level": "3",
            "parent_id": "7013"
        },
        {
            "id": "701305",
            "name": "湛河区",
            "level": "3",
            "parent_id": "7013"
        },
        {
            "id": "701306",
            "name": "宝丰县",
            "level": "3",
            "parent_id": "7013"
        },
        {
            "id": "701307",
            "name": "叶县",
            "level": "3",
            "parent_id": "7013"
        },
        {
            "id": "701308",
            "name": "鲁山县",
            "level": "3",
            "parent_id": "7013"
        },
        {
            "id": "701309",
            "name": "郏县",
            "level": "3",
            "parent_id": "7013"
        },
        {
            "id": "701310",
            "name": "舞钢市",
            "level": "3",
            "parent_id": "7013"
        },
        {
            "id": "701311",
            "name": "汝州市",
            "level": "3",
            "parent_id": "7013"
        },
        {
            "id": "701402",
            "name": "驿城区",
            "level": "3",
            "parent_id": "7014"
        },
        {
            "id": "701403",
            "name": "西平县",
            "level": "3",
            "parent_id": "7014"
        },
        {
            "id": "701404",
            "name": "上蔡县",
            "level": "3",
            "parent_id": "7014"
        },
        {
            "id": "701405",
            "name": "平舆县",
            "level": "3",
            "parent_id": "7014"
        },
        {
            "id": "701406",
            "name": "正阳县",
            "level": "3",
            "parent_id": "7014"
        },
        {
            "id": "701407",
            "name": "确山县",
            "level": "3",
            "parent_id": "7014"
        },
        {
            "id": "701408",
            "name": "泌阳县",
            "level": "3",
            "parent_id": "7014"
        },
        {
            "id": "701409",
            "name": "汝南县",
            "level": "3",
            "parent_id": "7014"
        },
        {
            "id": "701410",
            "name": "遂平县",
            "level": "3",
            "parent_id": "7014"
        },
        {
            "id": "701411",
            "name": "新蔡县",
            "level": "3",
            "parent_id": "7014"
        },
        {
            "id": "701502",
            "name": "川汇区",
            "level": "3",
            "parent_id": "7015"
        },
        {
            "id": "701503",
            "name": "扶沟县",
            "level": "3",
            "parent_id": "7015"
        },
        {
            "id": "701504",
            "name": "西华县",
            "level": "3",
            "parent_id": "7015"
        },
        {
            "id": "701505",
            "name": "商水县",
            "level": "3",
            "parent_id": "7015"
        },
        {
            "id": "701506",
            "name": "沈丘县",
            "level": "3",
            "parent_id": "7015"
        },
        {
            "id": "701507",
            "name": "郸城县",
            "level": "3",
            "parent_id": "7015"
        },
        {
            "id": "701508",
            "name": "淮阳县",
            "level": "3",
            "parent_id": "7015"
        },
        {
            "id": "701509",
            "name": "太康县",
            "level": "3",
            "parent_id": "7015"
        },
        {
            "id": "701510",
            "name": "鹿邑县",
            "level": "3",
            "parent_id": "7015"
        },
        {
            "id": "701511",
            "name": "项城市",
            "level": "3",
            "parent_id": "7015"
        },
        {
            "id": "701602",
            "name": "宛城区",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701603",
            "name": "卧龙区",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701604",
            "name": "南召县",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701605",
            "name": "方城县",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701606",
            "name": "西峡县",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701607",
            "name": "镇平县",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701608",
            "name": "内乡县",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701609",
            "name": "淅川县",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701610",
            "name": "社旗县",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701611",
            "name": "唐河县",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701612",
            "name": "新野县",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701613",
            "name": "桐柏县",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701614",
            "name": "邓州市",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701615",
            "name": "高新区",
            "level": "3",
            "parent_id": "7016"
        },
        {
            "id": "701702",
            "name": "浉河区",
            "level": "3",
            "parent_id": "7017"
        },
        {
            "id": "701703",
            "name": "平桥区",
            "level": "3",
            "parent_id": "7017"
        },
        {
            "id": "701704",
            "name": "罗山县",
            "level": "3",
            "parent_id": "7017"
        },
        {
            "id": "701705",
            "name": "光山县",
            "level": "3",
            "parent_id": "7017"
        },
        {
            "id": "701706",
            "name": "新县",
            "level": "3",
            "parent_id": "7017"
        },
        {
            "id": "701707",
            "name": "商城县",
            "level": "3",
            "parent_id": "7017"
        },
        {
            "id": "701708",
            "name": "固始县",
            "level": "3",
            "parent_id": "7017"
        },
        {
            "id": "701709",
            "name": "潢川县",
            "level": "3",
            "parent_id": "7017"
        },
        {
            "id": "701710",
            "name": "淮滨县",
            "level": "3",
            "parent_id": "7017"
        },
        {
            "id": "701711",
            "name": "息县",
            "level": "3",
            "parent_id": "7017"
        },
        {
            "id": "710102",
            "name": "江岸区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710103",
            "name": "江汉区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710104",
            "name": "楚口区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710105",
            "name": "汉阳区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710106",
            "name": "武昌区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710107",
            "name": "青山区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710108",
            "name": "洪山区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710109",
            "name": "东西湖区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710110",
            "name": "汉南区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710111",
            "name": "蔡甸区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710112",
            "name": "江夏区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710113",
            "name": "黄陂区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710114",
            "name": "新洲区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710115",
            "name": "开发区",
            "level": "3",
            "parent_id": "7101"
        },
        {
            "id": "710202",
            "name": "黄石港区",
            "level": "3",
            "parent_id": "7102"
        },
        {
            "id": "710203",
            "name": "西塞山区",
            "level": "3",
            "parent_id": "7102"
        },
        {
            "id": "710204",
            "name": "下陆区",
            "level": "3",
            "parent_id": "7102"
        },
        {
            "id": "710205",
            "name": "铁山区",
            "level": "3",
            "parent_id": "7102"
        },
        {
            "id": "710206",
            "name": "阳新县",
            "level": "3",
            "parent_id": "7102"
        },
        {
            "id": "710207",
            "name": "大冶市",
            "level": "3",
            "parent_id": "7102"
        },
        {
            "id": "710208",
            "name": "开发区",
            "level": "3",
            "parent_id": "7102"
        },
        {
            "id": "710302",
            "name": "襄城区",
            "level": "3",
            "parent_id": "7103"
        },
        {
            "id": "710303",
            "name": "樊城区",
            "level": "3",
            "parent_id": "7103"
        },
        {
            "id": "710304",
            "name": "襄州区",
            "level": "3",
            "parent_id": "7103"
        },
        {
            "id": "710305",
            "name": "南漳县",
            "level": "3",
            "parent_id": "7103"
        },
        {
            "id": "710306",
            "name": "谷城县",
            "level": "3",
            "parent_id": "7103"
        },
        {
            "id": "710307",
            "name": "保康县",
            "level": "3",
            "parent_id": "7103"
        },
        {
            "id": "710308",
            "name": "老河口市",
            "level": "3",
            "parent_id": "7103"
        },
        {
            "id": "710309",
            "name": "枣阳市",
            "level": "3",
            "parent_id": "7103"
        },
        {
            "id": "710310",
            "name": "宜城市",
            "level": "3",
            "parent_id": "7103"
        },
        {
            "id": "710311",
            "name": "开发区",
            "level": "3",
            "parent_id": "7103"
        },
        {
            "id": "710402",
            "name": "茅箭区",
            "level": "3",
            "parent_id": "7104"
        },
        {
            "id": "710403",
            "name": "张湾区",
            "level": "3",
            "parent_id": "7104"
        },
        {
            "id": "710404",
            "name": "郧县",
            "level": "3",
            "parent_id": "7104"
        },
        {
            "id": "710405",
            "name": "郧西县",
            "level": "3",
            "parent_id": "7104"
        },
        {
            "id": "710406",
            "name": "竹山县",
            "level": "3",
            "parent_id": "7104"
        },
        {
            "id": "710407",
            "name": "竹溪县",
            "level": "3",
            "parent_id": "7104"
        },
        {
            "id": "710408",
            "name": "房县",
            "level": "3",
            "parent_id": "7104"
        },
        {
            "id": "710409",
            "name": "丹江口市",
            "level": "3",
            "parent_id": "7104"
        },
        {
            "id": "710503",
            "name": "荆州区",
            "level": "3",
            "parent_id": "7105"
        },
        {
            "id": "710504",
            "name": "公安县",
            "level": "3",
            "parent_id": "7105"
        },
        {
            "id": "710505",
            "name": "监利县",
            "level": "3",
            "parent_id": "7105"
        },
        {
            "id": "710506",
            "name": "江陵县",
            "level": "3",
            "parent_id": "7105"
        },
        {
            "id": "710507",
            "name": "石首市",
            "level": "3",
            "parent_id": "7105"
        },
        {
            "id": "710508",
            "name": "洪湖市",
            "level": "3",
            "parent_id": "7105"
        },
        {
            "id": "710509",
            "name": "松滋市",
            "level": "3",
            "parent_id": "7105"
        },
        {
            "id": "710602",
            "name": "西陵区",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710603",
            "name": "伍家岗区",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710604",
            "name": "点军区",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710605",
            "name": "猇亭区",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710606",
            "name": "夷陵区",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710607",
            "name": "远安县",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710608",
            "name": "兴山县",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710609",
            "name": "秭归县",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710610",
            "name": "长阳县",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710611",
            "name": "五峰县",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710612",
            "name": "宜都市",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710613",
            "name": "当阳市",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710614",
            "name": "枝江市",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710615",
            "name": "高新区",
            "level": "3",
            "parent_id": "7106"
        },
        {
            "id": "710702",
            "name": "东宝区",
            "level": "3",
            "parent_id": "7107"
        },
        {
            "id": "710703",
            "name": "掇刀区",
            "level": "3",
            "parent_id": "7107"
        },
        {
            "id": "710704",
            "name": "京山县",
            "level": "3",
            "parent_id": "7107"
        },
        {
            "id": "710705",
            "name": "沙洋县",
            "level": "3",
            "parent_id": "7107"
        },
        {
            "id": "710706",
            "name": "钟祥市",
            "level": "3",
            "parent_id": "7107"
        },
        {
            "id": "710802",
            "name": "梁子湖区",
            "level": "3",
            "parent_id": "7108"
        },
        {
            "id": "710803",
            "name": "华容区",
            "level": "3",
            "parent_id": "7108"
        },
        {
            "id": "710804",
            "name": "鄂城区",
            "level": "3",
            "parent_id": "7108"
        },
        {
            "id": "710902",
            "name": "孝南区",
            "level": "3",
            "parent_id": "7109"
        },
        {
            "id": "710903",
            "name": "孝昌县",
            "level": "3",
            "parent_id": "7109"
        },
        {
            "id": "710904",
            "name": "大悟县",
            "level": "3",
            "parent_id": "7109"
        },
        {
            "id": "710905",
            "name": "云梦县",
            "level": "3",
            "parent_id": "7109"
        },
        {
            "id": "710906",
            "name": "应城市",
            "level": "3",
            "parent_id": "7109"
        },
        {
            "id": "710907",
            "name": "安陆市",
            "level": "3",
            "parent_id": "7109"
        },
        {
            "id": "710908",
            "name": "汉川市",
            "level": "3",
            "parent_id": "7109"
        },
        {
            "id": "711002",
            "name": "黄州区",
            "level": "3",
            "parent_id": "7110"
        },
        {
            "id": "711003",
            "name": "团风县",
            "level": "3",
            "parent_id": "7110"
        },
        {
            "id": "711004",
            "name": "红安县",
            "level": "3",
            "parent_id": "7110"
        },
        {
            "id": "711005",
            "name": "罗田县",
            "level": "3",
            "parent_id": "7110"
        },
        {
            "id": "711006",
            "name": "英山县",
            "level": "3",
            "parent_id": "7110"
        },
        {
            "id": "711007",
            "name": "浠水县",
            "level": "3",
            "parent_id": "7110"
        },
        {
            "id": "711008",
            "name": "蕲春县",
            "level": "3",
            "parent_id": "7110"
        },
        {
            "id": "711009",
            "name": "黄梅县",
            "level": "3",
            "parent_id": "7110"
        },
        {
            "id": "711010",
            "name": "麻城市",
            "level": "3",
            "parent_id": "7110"
        },
        {
            "id": "711011",
            "name": "武穴市",
            "level": "3",
            "parent_id": "7110"
        },
        {
            "id": "711102",
            "name": "咸安区",
            "level": "3",
            "parent_id": "7111"
        },
        {
            "id": "711103",
            "name": "嘉鱼县",
            "level": "3",
            "parent_id": "7111"
        },
        {
            "id": "711104",
            "name": "通城县",
            "level": "3",
            "parent_id": "7111"
        },
        {
            "id": "711105",
            "name": "崇阳县",
            "level": "3",
            "parent_id": "7111"
        },
        {
            "id": "711106",
            "name": "通山县",
            "level": "3",
            "parent_id": "7111"
        },
        {
            "id": "711107",
            "name": "赤壁市",
            "level": "3",
            "parent_id": "7111"
        },
        {
            "id": "711202",
            "name": "曾都区",
            "level": "3",
            "parent_id": "7112"
        },
        {
            "id": "711203",
            "name": "广水市",
            "level": "3",
            "parent_id": "7112"
        },
        {
            "id": "711301",
            "name": "恩施市",
            "level": "3",
            "parent_id": "7113"
        },
        {
            "id": "711302",
            "name": "利川市",
            "level": "3",
            "parent_id": "7113"
        },
        {
            "id": "711303",
            "name": "建始县",
            "level": "3",
            "parent_id": "7113"
        },
        {
            "id": "711304",
            "name": "巴东县",
            "level": "3",
            "parent_id": "7113"
        },
        {
            "id": "711305",
            "name": "宣恩县",
            "level": "3",
            "parent_id": "7113"
        },
        {
            "id": "711306",
            "name": "咸丰县",
            "level": "3",
            "parent_id": "7113"
        },
        {
            "id": "711307",
            "name": "来凤县",
            "level": "3",
            "parent_id": "7113"
        },
        {
            "id": "711308",
            "name": "鹤峰县",
            "level": "3",
            "parent_id": "7113"
        },
        {
            "id": "720102",
            "name": "芙蓉区",
            "level": "3",
            "parent_id": "7201"
        },
        {
            "id": "720103",
            "name": "天心区",
            "level": "3",
            "parent_id": "7201"
        },
        {
            "id": "720104",
            "name": "岳麓区",
            "level": "3",
            "parent_id": "7201"
        },
        {
            "id": "720105",
            "name": "开福区",
            "level": "3",
            "parent_id": "7201"
        },
        {
            "id": "720106",
            "name": "雨花区",
            "level": "3",
            "parent_id": "7201"
        },
        {
            "id": "720107",
            "name": "长沙县",
            "level": "3",
            "parent_id": "7201"
        },
        {
            "id": "720108",
            "name": "望城县",
            "level": "3",
            "parent_id": "7201"
        },
        {
            "id": "720109",
            "name": "宁乡县",
            "level": "3",
            "parent_id": "7201"
        },
        {
            "id": "720110",
            "name": "浏阳市",
            "level": "3",
            "parent_id": "7201"
        },
        {
            "id": "720111",
            "name": "开发区",
            "level": "3",
            "parent_id": "7201"
        },
        {
            "id": "720202",
            "name": "荷塘区",
            "level": "3",
            "parent_id": "7202"
        },
        {
            "id": "720203",
            "name": "芦淞区",
            "level": "3",
            "parent_id": "7202"
        },
        {
            "id": "720204",
            "name": "石峰区",
            "level": "3",
            "parent_id": "7202"
        },
        {
            "id": "720205",
            "name": "天元区",
            "level": "3",
            "parent_id": "7202"
        },
        {
            "id": "720206",
            "name": "株洲县",
            "level": "3",
            "parent_id": "7202"
        },
        {
            "id": "720207",
            "name": "攸县",
            "level": "3",
            "parent_id": "7202"
        },
        {
            "id": "720208",
            "name": "茶陵县",
            "level": "3",
            "parent_id": "7202"
        },
        {
            "id": "720209",
            "name": "炎陵县",
            "level": "3",
            "parent_id": "7202"
        },
        {
            "id": "720210",
            "name": "醴陵市",
            "level": "3",
            "parent_id": "7202"
        },
        {
            "id": "720211",
            "name": "高新区",
            "level": "3",
            "parent_id": "7202"
        },
        {
            "id": "720302",
            "name": "雨湖区",
            "level": "3",
            "parent_id": "7203"
        },
        {
            "id": "720303",
            "name": "岳塘区",
            "level": "3",
            "parent_id": "7203"
        },
        {
            "id": "720304",
            "name": "湘潭县",
            "level": "3",
            "parent_id": "7203"
        },
        {
            "id": "720305",
            "name": "湘乡市",
            "level": "3",
            "parent_id": "7203"
        },
        {
            "id": "720306",
            "name": "韶山市",
            "level": "3",
            "parent_id": "7203"
        },
        {
            "id": "720307",
            "name": "高新区",
            "level": "3",
            "parent_id": "7203"
        },
        {
            "id": "720402",
            "name": "珠晖区",
            "level": "3",
            "parent_id": "7204"
        },
        {
            "id": "720403",
            "name": "雁峰区",
            "level": "3",
            "parent_id": "7204"
        },
        {
            "id": "720404",
            "name": "石鼓区",
            "level": "3",
            "parent_id": "7204"
        },
        {
            "id": "720405",
            "name": "蒸湘区",
            "level": "3",
            "parent_id": "7204"
        },
        {
            "id": "720406",
            "name": "南岳区",
            "level": "3",
            "parent_id": "7204"
        },
        {
            "id": "720407",
            "name": "衡阳县",
            "level": "3",
            "parent_id": "7204"
        },
        {
            "id": "720408",
            "name": "衡南县",
            "level": "3",
            "parent_id": "7204"
        },
        {
            "id": "720409",
            "name": "衡山县",
            "level": "3",
            "parent_id": "7204"
        },
        {
            "id": "720410",
            "name": "衡东县",
            "level": "3",
            "parent_id": "7204"
        },
        {
            "id": "720411",
            "name": "祁东县",
            "level": "3",
            "parent_id": "7204"
        },
        {
            "id": "720412",
            "name": "耒阳市",
            "level": "3",
            "parent_id": "7204"
        },
        {
            "id": "720413",
            "name": "常宁市",
            "level": "3",
            "parent_id": "7204"
        },
        {
            "id": "720502",
            "name": "资阳区",
            "level": "3",
            "parent_id": "7205"
        },
        {
            "id": "720503",
            "name": "赫山区",
            "level": "3",
            "parent_id": "7205"
        },
        {
            "id": "720504",
            "name": "南县",
            "level": "3",
            "parent_id": "7205"
        },
        {
            "id": "720505",
            "name": "桃江县",
            "level": "3",
            "parent_id": "7205"
        },
        {
            "id": "720506",
            "name": "安化县",
            "level": "3",
            "parent_id": "7205"
        },
        {
            "id": "720507",
            "name": "沅江市",
            "level": "3",
            "parent_id": "7205"
        },
        {
            "id": "720508",
            "name": "高新区",
            "level": "3",
            "parent_id": "7205"
        },
        {
            "id": "720602",
            "name": "武陵区",
            "level": "3",
            "parent_id": "7206"
        },
        {
            "id": "720603",
            "name": "鼎城区",
            "level": "3",
            "parent_id": "7206"
        },
        {
            "id": "720604",
            "name": "安乡县",
            "level": "3",
            "parent_id": "7206"
        },
        {
            "id": "720605",
            "name": "汉寿县",
            "level": "3",
            "parent_id": "7206"
        },
        {
            "id": "720606",
            "name": "澧县",
            "level": "3",
            "parent_id": "7206"
        },
        {
            "id": "720607",
            "name": "临澧县",
            "level": "3",
            "parent_id": "7206"
        },
        {
            "id": "720608",
            "name": "桃源县",
            "level": "3",
            "parent_id": "7206"
        },
        {
            "id": "720609",
            "name": "石门县",
            "level": "3",
            "parent_id": "7206"
        },
        {
            "id": "720610",
            "name": "津市市",
            "level": "3",
            "parent_id": "7206"
        },
        {
            "id": "720611",
            "name": "开发区",
            "level": "3",
            "parent_id": "7206"
        },
        {
            "id": "720702",
            "name": "岳阳楼区",
            "level": "3",
            "parent_id": "7207"
        },
        {
            "id": "720703",
            "name": "云溪区",
            "level": "3",
            "parent_id": "7207"
        },
        {
            "id": "720704",
            "name": "君山区",
            "level": "3",
            "parent_id": "7207"
        },
        {
            "id": "720705",
            "name": "岳阳县",
            "level": "3",
            "parent_id": "7207"
        },
        {
            "id": "720706",
            "name": "华容县",
            "level": "3",
            "parent_id": "7207"
        },
        {
            "id": "720707",
            "name": "湘阴县",
            "level": "3",
            "parent_id": "7207"
        },
        {
            "id": "720708",
            "name": "平江县",
            "level": "3",
            "parent_id": "7207"
        },
        {
            "id": "720709",
            "name": "汨罗市",
            "level": "3",
            "parent_id": "7207"
        },
        {
            "id": "720710",
            "name": "临湘市",
            "level": "3",
            "parent_id": "7207"
        },
        {
            "id": "720711",
            "name": "开发区",
            "level": "3",
            "parent_id": "7207"
        },
        {
            "id": "720802",
            "name": "双清区",
            "level": "3",
            "parent_id": "7208"
        },
        {
            "id": "720803",
            "name": "大祥区",
            "level": "3",
            "parent_id": "7208"
        },
        {
            "id": "720804",
            "name": "北塔区",
            "level": "3",
            "parent_id": "7208"
        },
        {
            "id": "720805",
            "name": "邵东县",
            "level": "3",
            "parent_id": "7208"
        },
        {
            "id": "720806",
            "name": "新邵县",
            "level": "3",
            "parent_id": "7208"
        },
        {
            "id": "720807",
            "name": "邵阳县",
            "level": "3",
            "parent_id": "7208"
        },
        {
            "id": "720808",
            "name": "隆回县",
            "level": "3",
            "parent_id": "7208"
        },
        {
            "id": "720809",
            "name": "洞口县",
            "level": "3",
            "parent_id": "7208"
        },
        {
            "id": "720810",
            "name": "绥宁县",
            "level": "3",
            "parent_id": "7208"
        },
        {
            "id": "720811",
            "name": "新宁县",
            "level": "3",
            "parent_id": "7208"
        },
        {
            "id": "720812",
            "name": "城步县",
            "level": "3",
            "parent_id": "7208"
        },
        {
            "id": "720813",
            "name": "武冈市",
            "level": "3",
            "parent_id": "7208"
        },
        {
            "id": "720902",
            "name": "北湖区",
            "level": "3",
            "parent_id": "7209"
        },
        {
            "id": "720903",
            "name": "苏仙区",
            "level": "3",
            "parent_id": "7209"
        },
        {
            "id": "720904",
            "name": "桂阳县",
            "level": "3",
            "parent_id": "7209"
        },
        {
            "id": "720905",
            "name": "宜章县",
            "level": "3",
            "parent_id": "7209"
        },
        {
            "id": "720906",
            "name": "永兴县",
            "level": "3",
            "parent_id": "7209"
        },
        {
            "id": "720907",
            "name": "嘉禾县",
            "level": "3",
            "parent_id": "7209"
        },
        {
            "id": "720908",
            "name": "临武县",
            "level": "3",
            "parent_id": "7209"
        },
        {
            "id": "720909",
            "name": "汝城县",
            "level": "3",
            "parent_id": "7209"
        },
        {
            "id": "720910",
            "name": "桂东县",
            "level": "3",
            "parent_id": "7209"
        },
        {
            "id": "720911",
            "name": "安仁县",
            "level": "3",
            "parent_id": "7209"
        },
        {
            "id": "720912",
            "name": "资兴市",
            "level": "3",
            "parent_id": "7209"
        },
        {
            "id": "721002",
            "name": "娄星区",
            "level": "3",
            "parent_id": "7210"
        },
        {
            "id": "721003",
            "name": "双峰县",
            "level": "3",
            "parent_id": "7210"
        },
        {
            "id": "721004",
            "name": "新化县",
            "level": "3",
            "parent_id": "7210"
        },
        {
            "id": "721005",
            "name": "冷水江市",
            "level": "3",
            "parent_id": "7210"
        },
        {
            "id": "721006",
            "name": "涟源市",
            "level": "3",
            "parent_id": "7210"
        },
        {
            "id": "721102",
            "name": "零陵区",
            "level": "3",
            "parent_id": "7211"
        },
        {
            "id": "721103",
            "name": "冷水滩区",
            "level": "3",
            "parent_id": "7211"
        },
        {
            "id": "721104",
            "name": "祁阳县",
            "level": "3",
            "parent_id": "7211"
        },
        {
            "id": "721105",
            "name": "东安县",
            "level": "3",
            "parent_id": "7211"
        },
        {
            "id": "721106",
            "name": "双牌县",
            "level": "3",
            "parent_id": "7211"
        },
        {
            "id": "721107",
            "name": "道县",
            "level": "3",
            "parent_id": "7211"
        },
        {
            "id": "721108",
            "name": "江永县",
            "level": "3",
            "parent_id": "7211"
        },
        {
            "id": "721109",
            "name": "宁远县",
            "level": "3",
            "parent_id": "7211"
        },
        {
            "id": "721110",
            "name": "蓝山县",
            "level": "3",
            "parent_id": "7211"
        },
        {
            "id": "721111",
            "name": "新田县",
            "level": "3",
            "parent_id": "7211"
        },
        {
            "id": "721112",
            "name": "江华县",
            "level": "3",
            "parent_id": "7211"
        },
        {
            "id": "721202",
            "name": "鹤城区",
            "level": "3",
            "parent_id": "7212"
        },
        {
            "id": "721203",
            "name": "中方县",
            "level": "3",
            "parent_id": "7212"
        },
        {
            "id": "721204",
            "name": "沅陵县",
            "level": "3",
            "parent_id": "7212"
        },
        {
            "id": "721205",
            "name": "辰溪县",
            "level": "3",
            "parent_id": "7212"
        },
        {
            "id": "721206",
            "name": "溆浦县",
            "level": "3",
            "parent_id": "7212"
        },
        {
            "id": "721207",
            "name": "会同县",
            "level": "3",
            "parent_id": "7212"
        },
        {
            "id": "721208",
            "name": "麻阳县",
            "level": "3",
            "parent_id": "7212"
        },
        {
            "id": "721209",
            "name": "新晃县",
            "level": "3",
            "parent_id": "7212"
        },
        {
            "id": "721210",
            "name": "芷江县",
            "level": "3",
            "parent_id": "7212"
        },
        {
            "id": "721211",
            "name": "靖州苗族县",
            "level": "3",
            "parent_id": "7212"
        },
        {
            "id": "721212",
            "name": "通道县",
            "level": "3",
            "parent_id": "7212"
        },
        {
            "id": "721213",
            "name": "洪江市",
            "level": "3",
            "parent_id": "7212"
        },
        {
            "id": "721302",
            "name": "永定区",
            "level": "3",
            "parent_id": "7213"
        },
        {
            "id": "721303",
            "name": "武陵源区",
            "level": "3",
            "parent_id": "7213"
        },
        {
            "id": "721304",
            "name": "慈利县",
            "level": "3",
            "parent_id": "7213"
        },
        {
            "id": "721305",
            "name": "桑植县",
            "level": "3",
            "parent_id": "7213"
        },
        {
            "id": "721401",
            "name": "吉首市",
            "level": "3",
            "parent_id": "7214"
        },
        {
            "id": "721402",
            "name": "泸溪县",
            "level": "3",
            "parent_id": "7214"
        },
        {
            "id": "721403",
            "name": "凤凰县",
            "level": "3",
            "parent_id": "7214"
        },
        {
            "id": "721404",
            "name": "花垣县",
            "level": "3",
            "parent_id": "7214"
        },
        {
            "id": "721405",
            "name": "保靖县",
            "level": "3",
            "parent_id": "7214"
        },
        {
            "id": "721406",
            "name": "古丈县",
            "level": "3",
            "parent_id": "7214"
        },
        {
            "id": "721407",
            "name": "永顺县",
            "level": "3",
            "parent_id": "7214"
        },
        {
            "id": "721408",
            "name": "龙山县",
            "level": "3",
            "parent_id": "7214"
        },
        {
            "id": "800102",
            "name": "新城区",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800103",
            "name": "碑林区",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800104",
            "name": "莲湖区",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800105",
            "name": "灞桥区",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800106",
            "name": "未央区",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800107",
            "name": "雁塔区",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800108",
            "name": "阎良区",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800109",
            "name": "临潼区",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800110",
            "name": "长安区",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800111",
            "name": "蓝田县",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800112",
            "name": "周至县",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800113",
            "name": "户县",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800114",
            "name": "高陵县",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800115",
            "name": "经济开发区",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800116",
            "name": "高新区",
            "level": "3",
            "parent_id": "8001"
        },
        {
            "id": "800202",
            "name": "渭滨区",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800203",
            "name": "金台区",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800204",
            "name": "陈仓区",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800205",
            "name": "凤翔县",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800206",
            "name": "岐山县",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800207",
            "name": "扶风县",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800208",
            "name": "眉县",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800209",
            "name": "陇县",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800210",
            "name": "千阳县",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800211",
            "name": "麟游县",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800212",
            "name": "凤县",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800213",
            "name": "太白县",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800214",
            "name": "高新区",
            "level": "3",
            "parent_id": "8002"
        },
        {
            "id": "800302",
            "name": "秦都区",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800304",
            "name": "渭城区",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800305",
            "name": "三原县",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800306",
            "name": "泾阳县",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800307",
            "name": "乾县",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800308",
            "name": "礼泉县",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800309",
            "name": "永寿县",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800310",
            "name": "彬县",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800311",
            "name": "长武县",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800312",
            "name": "旬邑县",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800313",
            "name": "淳化县",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800314",
            "name": "武功县",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800315",
            "name": "兴平市",
            "level": "3",
            "parent_id": "8003"
        },
        {
            "id": "800402",
            "name": "临渭区",
            "level": "3",
            "parent_id": "8004"
        },
        {
            "id": "800403",
            "name": "华县",
            "level": "3",
            "parent_id": "8004"
        },
        {
            "id": "800404",
            "name": "潼关县",
            "level": "3",
            "parent_id": "8004"
        },
        {
            "id": "800405",
            "name": "大荔县",
            "level": "3",
            "parent_id": "8004"
        },
        {
            "id": "800406",
            "name": "合阳县",
            "level": "3",
            "parent_id": "8004"
        },
        {
            "id": "800407",
            "name": "澄城县",
            "level": "3",
            "parent_id": "8004"
        },
        {
            "id": "800408",
            "name": "蒲城县",
            "level": "3",
            "parent_id": "8004"
        },
        {
            "id": "800409",
            "name": "白水县",
            "level": "3",
            "parent_id": "8004"
        },
        {
            "id": "800410",
            "name": "富平县",
            "level": "3",
            "parent_id": "8004"
        },
        {
            "id": "800411",
            "name": "韩城市",
            "level": "3",
            "parent_id": "8004"
        },
        {
            "id": "800412",
            "name": "华阴市",
            "level": "3",
            "parent_id": "8004"
        },
        {
            "id": "800413",
            "name": "高新区",
            "level": "3",
            "parent_id": "8004"
        },
        {
            "id": "800502",
            "name": "宝塔区",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800503",
            "name": "延长县",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800504",
            "name": "延川县",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800505",
            "name": "子长县",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800506",
            "name": "安塞县",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800507",
            "name": "志丹县",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800508",
            "name": "吴起县",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800509",
            "name": "甘泉县",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800510",
            "name": "富县",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800511",
            "name": "洛川县",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800512",
            "name": "宜川县",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800513",
            "name": "黄龙县",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800514",
            "name": "黄陵县",
            "level": "3",
            "parent_id": "8005"
        },
        {
            "id": "800602",
            "name": "榆阳区",
            "level": "3",
            "parent_id": "8006"
        },
        {
            "id": "800603",
            "name": "神木县",
            "level": "3",
            "parent_id": "8006"
        },
        {
            "id": "800604",
            "name": "府谷县",
            "level": "3",
            "parent_id": "8006"
        },
        {
            "id": "800605",
            "name": "横山县",
            "level": "3",
            "parent_id": "8006"
        },
        {
            "id": "800606",
            "name": "靖边县",
            "level": "3",
            "parent_id": "8006"
        },
        {
            "id": "800607",
            "name": "定边县",
            "level": "3",
            "parent_id": "8006"
        },
        {
            "id": "800608",
            "name": "绥德县",
            "level": "3",
            "parent_id": "8006"
        },
        {
            "id": "800609",
            "name": "米脂县",
            "level": "3",
            "parent_id": "8006"
        },
        {
            "id": "800610",
            "name": "佳县",
            "level": "3",
            "parent_id": "8006"
        },
        {
            "id": "800611",
            "name": "吴堡县",
            "level": "3",
            "parent_id": "8006"
        },
        {
            "id": "800612",
            "name": "清涧县",
            "level": "3",
            "parent_id": "8006"
        },
        {
            "id": "800613",
            "name": "子洲县",
            "level": "3",
            "parent_id": "8006"
        },
        {
            "id": "800702",
            "name": "王益区",
            "level": "3",
            "parent_id": "8007"
        },
        {
            "id": "800703",
            "name": "印台区",
            "level": "3",
            "parent_id": "8007"
        },
        {
            "id": "800704",
            "name": "耀州区",
            "level": "3",
            "parent_id": "8007"
        },
        {
            "id": "800705",
            "name": "宜君县",
            "level": "3",
            "parent_id": "8007"
        },
        {
            "id": "800802",
            "name": "汉台区",
            "level": "3",
            "parent_id": "8008"
        },
        {
            "id": "800803",
            "name": "南郑县",
            "level": "3",
            "parent_id": "8008"
        },
        {
            "id": "800804",
            "name": "城固县",
            "level": "3",
            "parent_id": "8008"
        },
        {
            "id": "800805",
            "name": "洋县",
            "level": "3",
            "parent_id": "8008"
        },
        {
            "id": "800806",
            "name": "西乡县",
            "level": "3",
            "parent_id": "8008"
        },
        {
            "id": "800807",
            "name": "勉县",
            "level": "3",
            "parent_id": "8008"
        },
        {
            "id": "800808",
            "name": "宁强县",
            "level": "3",
            "parent_id": "8008"
        },
        {
            "id": "800809",
            "name": "略阳县",
            "level": "3",
            "parent_id": "8008"
        },
        {
            "id": "800810",
            "name": "镇巴县",
            "level": "3",
            "parent_id": "8008"
        },
        {
            "id": "800811",
            "name": "留坝县",
            "level": "3",
            "parent_id": "8008"
        },
        {
            "id": "800812",
            "name": "佛坪县",
            "level": "3",
            "parent_id": "8008"
        },
        {
            "id": "800902",
            "name": "汉滨区",
            "level": "3",
            "parent_id": "8009"
        },
        {
            "id": "800903",
            "name": "汉阴县",
            "level": "3",
            "parent_id": "8009"
        },
        {
            "id": "800904",
            "name": "石泉县",
            "level": "3",
            "parent_id": "8009"
        },
        {
            "id": "800905",
            "name": "宁陕县",
            "level": "3",
            "parent_id": "8009"
        },
        {
            "id": "800906",
            "name": "紫阳县",
            "level": "3",
            "parent_id": "8009"
        },
        {
            "id": "800907",
            "name": "岚皋县",
            "level": "3",
            "parent_id": "8009"
        },
        {
            "id": "800908",
            "name": "平利县",
            "level": "3",
            "parent_id": "8009"
        },
        {
            "id": "800909",
            "name": "镇坪县",
            "level": "3",
            "parent_id": "8009"
        },
        {
            "id": "800910",
            "name": "旬阳县",
            "level": "3",
            "parent_id": "8009"
        },
        {
            "id": "800911",
            "name": "白河县",
            "level": "3",
            "parent_id": "8009"
        },
        {
            "id": "801002",
            "name": "商州区",
            "level": "3",
            "parent_id": "8010"
        },
        {
            "id": "801003",
            "name": "洛南县",
            "level": "3",
            "parent_id": "8010"
        },
        {
            "id": "801004",
            "name": "丹凤县",
            "level": "3",
            "parent_id": "8010"
        },
        {
            "id": "801005",
            "name": "商南县",
            "level": "3",
            "parent_id": "8010"
        },
        {
            "id": "801006",
            "name": "山阳县",
            "level": "3",
            "parent_id": "8010"
        },
        {
            "id": "801007",
            "name": "镇安县",
            "level": "3",
            "parent_id": "8010"
        },
        {
            "id": "801008",
            "name": "柞水县",
            "level": "3",
            "parent_id": "8010"
        },
        {
            "id": "801101",
            "name": "农业示范区",
            "level": "3",
            "parent_id": "8011"
        },
        {
            "id": "810102",
            "name": "城东区",
            "level": "3",
            "parent_id": "8101"
        },
        {
            "id": "810103",
            "name": "城中区",
            "level": "3",
            "parent_id": "8101"
        },
        {
            "id": "810104",
            "name": "城西区",
            "level": "3",
            "parent_id": "8101"
        },
        {
            "id": "810105",
            "name": "城北区",
            "level": "3",
            "parent_id": "8101"
        },
        {
            "id": "810106",
            "name": "大通县",
            "level": "3",
            "parent_id": "8101"
        },
        {
            "id": "810107",
            "name": "湟中县",
            "level": "3",
            "parent_id": "8101"
        },
        {
            "id": "810108",
            "name": "湟源县",
            "level": "3",
            "parent_id": "8101"
        },
        {
            "id": "810109",
            "name": "开发区",
            "level": "3",
            "parent_id": "8101"
        },
        {
            "id": "810201",
            "name": "平安县",
            "level": "3",
            "parent_id": "8102"
        },
        {
            "id": "810202",
            "name": "民和县",
            "level": "3",
            "parent_id": "8102"
        },
        {
            "id": "810203",
            "name": "乐都县",
            "level": "3",
            "parent_id": "8102"
        },
        {
            "id": "810204",
            "name": "互助县",
            "level": "3",
            "parent_id": "8102"
        },
        {
            "id": "810205",
            "name": "化隆县",
            "level": "3",
            "parent_id": "8102"
        },
        {
            "id": "810206",
            "name": "循化县",
            "level": "3",
            "parent_id": "8102"
        },
        {
            "id": "810301",
            "name": "共和县",
            "level": "3",
            "parent_id": "8103"
        },
        {
            "id": "810302",
            "name": "同德县",
            "level": "3",
            "parent_id": "8103"
        },
        {
            "id": "810303",
            "name": "贵德县",
            "level": "3",
            "parent_id": "8103"
        },
        {
            "id": "810304",
            "name": "兴海县",
            "level": "3",
            "parent_id": "8103"
        },
        {
            "id": "810305",
            "name": "贵南县",
            "level": "3",
            "parent_id": "8103"
        },
        {
            "id": "810401",
            "name": "门源县",
            "level": "3",
            "parent_id": "8104"
        },
        {
            "id": "810402",
            "name": "祁连县",
            "level": "3",
            "parent_id": "8104"
        },
        {
            "id": "810403",
            "name": "海晏县",
            "level": "3",
            "parent_id": "8104"
        },
        {
            "id": "810404",
            "name": "刚察县",
            "level": "3",
            "parent_id": "8104"
        },
        {
            "id": "810501",
            "name": "格尔木市",
            "level": "3",
            "parent_id": "8105"
        },
        {
            "id": "810502",
            "name": "德令哈市",
            "level": "3",
            "parent_id": "8105"
        },
        {
            "id": "810503",
            "name": "乌兰县",
            "level": "3",
            "parent_id": "8105"
        },
        {
            "id": "810504",
            "name": "都兰县",
            "level": "3",
            "parent_id": "8105"
        },
        {
            "id": "810505",
            "name": "天峻县",
            "level": "3",
            "parent_id": "8105"
        },
        {
            "id": "810601",
            "name": "同仁县",
            "level": "3",
            "parent_id": "8106"
        },
        {
            "id": "810602",
            "name": "尖扎县",
            "level": "3",
            "parent_id": "8106"
        },
        {
            "id": "810603",
            "name": "泽库县",
            "level": "3",
            "parent_id": "8106"
        },
        {
            "id": "810604",
            "name": "河南县",
            "level": "3",
            "parent_id": "8106"
        },
        {
            "id": "810701",
            "name": "玛沁县",
            "level": "3",
            "parent_id": "8107"
        },
        {
            "id": "810702",
            "name": "班玛县",
            "level": "3",
            "parent_id": "8107"
        },
        {
            "id": "810703",
            "name": "甘德县",
            "level": "3",
            "parent_id": "8107"
        },
        {
            "id": "810704",
            "name": "达日县",
            "level": "3",
            "parent_id": "8107"
        },
        {
            "id": "810705",
            "name": "久治县",
            "level": "3",
            "parent_id": "8107"
        },
        {
            "id": "810706",
            "name": "玛多县",
            "level": "3",
            "parent_id": "8107"
        },
        {
            "id": "810801",
            "name": "玉树县",
            "level": "3",
            "parent_id": "8108"
        },
        {
            "id": "810802",
            "name": "杂多县",
            "level": "3",
            "parent_id": "8108"
        },
        {
            "id": "810803",
            "name": "称多县",
            "level": "3",
            "parent_id": "8108"
        },
        {
            "id": "810804",
            "name": "治多县",
            "level": "3",
            "parent_id": "8108"
        },
        {
            "id": "810805",
            "name": "囊谦县",
            "level": "3",
            "parent_id": "8108"
        },
        {
            "id": "810806",
            "name": "曲麻莱县",
            "level": "3",
            "parent_id": "8108"
        },
        {
            "id": "820102",
            "name": "兴庆区",
            "level": "3",
            "parent_id": "8201"
        },
        {
            "id": "820103",
            "name": "西夏区",
            "level": "3",
            "parent_id": "8201"
        },
        {
            "id": "820104",
            "name": "金凤区",
            "level": "3",
            "parent_id": "8201"
        },
        {
            "id": "820105",
            "name": "永宁县",
            "level": "3",
            "parent_id": "8201"
        },
        {
            "id": "820106",
            "name": "贺兰县",
            "level": "3",
            "parent_id": "8201"
        },
        {
            "id": "820107",
            "name": "灵武市",
            "level": "3",
            "parent_id": "8201"
        },
        {
            "id": "820108",
            "name": "开发区",
            "level": "3",
            "parent_id": "8201"
        },
        {
            "id": "820202",
            "name": "大武口区",
            "level": "3",
            "parent_id": "8202"
        },
        {
            "id": "820203",
            "name": "惠农区",
            "level": "3",
            "parent_id": "8202"
        },
        {
            "id": "820204",
            "name": "平罗县",
            "level": "3",
            "parent_id": "8202"
        },
        {
            "id": "820302",
            "name": "利通区",
            "level": "3",
            "parent_id": "8203"
        },
        {
            "id": "820303",
            "name": "盐池县",
            "level": "3",
            "parent_id": "8203"
        },
        {
            "id": "820304",
            "name": "同心县",
            "level": "3",
            "parent_id": "8203"
        },
        {
            "id": "820305",
            "name": "青铜峡市",
            "level": "3",
            "parent_id": "8203"
        },
        {
            "id": "820402",
            "name": "原州区",
            "level": "3",
            "parent_id": "8204"
        },
        {
            "id": "820403",
            "name": "西吉县",
            "level": "3",
            "parent_id": "8204"
        },
        {
            "id": "820404",
            "name": "隆德县",
            "level": "3",
            "parent_id": "8204"
        },
        {
            "id": "820405",
            "name": "泾源县",
            "level": "3",
            "parent_id": "8204"
        },
        {
            "id": "820406",
            "name": "彭阳县",
            "level": "3",
            "parent_id": "8204"
        },
        {
            "id": "820502",
            "name": "沙坡头区",
            "level": "3",
            "parent_id": "8205"
        },
        {
            "id": "820503",
            "name": "中宁县",
            "level": "3",
            "parent_id": "8205"
        },
        {
            "id": "820504",
            "name": "海原县",
            "level": "3",
            "parent_id": "8205"
        },
        {
            "id": "830102",
            "name": "天山区",
            "level": "3",
            "parent_id": "8301"
        },
        {
            "id": "830103",
            "name": "沙依巴克区",
            "level": "3",
            "parent_id": "8301"
        },
        {
            "id": "830105",
            "name": "水磨沟区",
            "level": "3",
            "parent_id": "8301"
        },
        {
            "id": "830106",
            "name": "头屯河区(开发区)",
            "level": "3",
            "parent_id": "8301"
        },
        {
            "id": "830107",
            "name": "达坂城区",
            "level": "3",
            "parent_id": "8301"
        },
        {
            "id": "830108",
            "name": "米东区",
            "level": "3",
            "parent_id": "8301"
        },
        {
            "id": "830109",
            "name": "乌鲁木齐县",
            "level": "3",
            "parent_id": "8301"
        },
        {
            "id": "830110",
            "name": "新市区(高新区)",
            "level": "3",
            "parent_id": "8301"
        },
        {
            "id": "830201",
            "name": "伊宁市",
            "level": "3",
            "parent_id": "8302"
        },
        {
            "id": "830202",
            "name": "奎屯市",
            "level": "3",
            "parent_id": "8302"
        },
        {
            "id": "830203",
            "name": "伊宁县",
            "level": "3",
            "parent_id": "8302"
        },
        {
            "id": "830204",
            "name": "察布查尔",
            "level": "3",
            "parent_id": "8302"
        },
        {
            "id": "830205",
            "name": "霍城县",
            "level": "3",
            "parent_id": "8302"
        },
        {
            "id": "830206",
            "name": "巩留县",
            "level": "3",
            "parent_id": "8302"
        },
        {
            "id": "830207",
            "name": "新源县",
            "level": "3",
            "parent_id": "8302"
        },
        {
            "id": "830208",
            "name": "昭苏县",
            "level": "3",
            "parent_id": "8302"
        },
        {
            "id": "830209",
            "name": "特克斯县",
            "level": "3",
            "parent_id": "8302"
        },
        {
            "id": "830210",
            "name": "尼勒克县",
            "level": "3",
            "parent_id": "8302"
        },
        {
            "id": "830301",
            "name": "阿勒泰市",
            "level": "3",
            "parent_id": "8303"
        },
        {
            "id": "830302",
            "name": "布尔津县",
            "level": "3",
            "parent_id": "8303"
        },
        {
            "id": "830303",
            "name": "富蕴县",
            "level": "3",
            "parent_id": "8303"
        },
        {
            "id": "830304",
            "name": "福海县",
            "level": "3",
            "parent_id": "8303"
        },
        {
            "id": "830305",
            "name": "哈巴河县",
            "level": "3",
            "parent_id": "8303"
        },
        {
            "id": "830306",
            "name": "青河县",
            "level": "3",
            "parent_id": "8303"
        },
        {
            "id": "830307",
            "name": "吉木乃县",
            "level": "3",
            "parent_id": "8303"
        },
        {
            "id": "830401",
            "name": "塔城市",
            "level": "3",
            "parent_id": "8304"
        },
        {
            "id": "830402",
            "name": "乌苏市",
            "level": "3",
            "parent_id": "8304"
        },
        {
            "id": "830403",
            "name": "额敏县",
            "level": "3",
            "parent_id": "8304"
        },
        {
            "id": "830404",
            "name": "沙湾县",
            "level": "3",
            "parent_id": "8304"
        },
        {
            "id": "830405",
            "name": "托里县",
            "level": "3",
            "parent_id": "8304"
        },
        {
            "id": "830406",
            "name": "裕民县",
            "level": "3",
            "parent_id": "8304"
        },
        {
            "id": "830407",
            "name": "和布克赛尔",
            "level": "3",
            "parent_id": "8304"
        },
        {
            "id": "830501",
            "name": "博乐市",
            "level": "3",
            "parent_id": "8305"
        },
        {
            "id": "830502",
            "name": "精河县",
            "level": "3",
            "parent_id": "8305"
        },
        {
            "id": "830503",
            "name": "温泉县",
            "level": "3",
            "parent_id": "8305"
        },
        {
            "id": "830601",
            "name": "昌吉市",
            "level": "3",
            "parent_id": "8306"
        },
        {
            "id": "830602",
            "name": "阜康市",
            "level": "3",
            "parent_id": "8306"
        },
        {
            "id": "830603",
            "name": "呼图壁县",
            "level": "3",
            "parent_id": "8306"
        },
        {
            "id": "830604",
            "name": "玛纳斯县",
            "level": "3",
            "parent_id": "8306"
        },
        {
            "id": "830605",
            "name": "奇台县",
            "level": "3",
            "parent_id": "8306"
        },
        {
            "id": "830606",
            "name": "吉木萨尔县",
            "level": "3",
            "parent_id": "8306"
        },
        {
            "id": "830607",
            "name": "木垒县",
            "level": "3",
            "parent_id": "8306"
        },
        {
            "id": "830608",
            "name": "高新区",
            "level": "3",
            "parent_id": "8306"
        },
        {
            "id": "830701",
            "name": "吐鲁番市",
            "level": "3",
            "parent_id": "8307"
        },
        {
            "id": "830702",
            "name": "鄯善县",
            "level": "3",
            "parent_id": "8307"
        },
        {
            "id": "830703",
            "name": "托克逊县",
            "level": "3",
            "parent_id": "8307"
        },
        {
            "id": "830801",
            "name": "库尔勒市",
            "level": "3",
            "parent_id": "8308"
        },
        {
            "id": "830802",
            "name": "轮台县",
            "level": "3",
            "parent_id": "8308"
        },
        {
            "id": "830803",
            "name": "尉犁县",
            "level": "3",
            "parent_id": "8308"
        },
        {
            "id": "830804",
            "name": "若羌县",
            "level": "3",
            "parent_id": "8308"
        },
        {
            "id": "830805",
            "name": "且末县",
            "level": "3",
            "parent_id": "8308"
        },
        {
            "id": "830806",
            "name": "焉耆县",
            "level": "3",
            "parent_id": "8308"
        },
        {
            "id": "830807",
            "name": "和静县",
            "level": "3",
            "parent_id": "8308"
        },
        {
            "id": "830808",
            "name": "和硕县",
            "level": "3",
            "parent_id": "8308"
        },
        {
            "id": "830809",
            "name": "博湖县",
            "level": "3",
            "parent_id": "8308"
        },
        {
            "id": "830901",
            "name": "哈密市",
            "level": "3",
            "parent_id": "8309"
        },
        {
            "id": "830902",
            "name": "巴里坤县",
            "level": "3",
            "parent_id": "8309"
        },
        {
            "id": "830903",
            "name": "伊吾县",
            "level": "3",
            "parent_id": "8309"
        },
        {
            "id": "831001",
            "name": "和田市",
            "level": "3",
            "parent_id": "8310"
        },
        {
            "id": "831002",
            "name": "和田县",
            "level": "3",
            "parent_id": "8310"
        },
        {
            "id": "831003",
            "name": "墨玉县",
            "level": "3",
            "parent_id": "8310"
        },
        {
            "id": "831004",
            "name": "皮山县",
            "level": "3",
            "parent_id": "8310"
        },
        {
            "id": "831005",
            "name": "洛浦县",
            "level": "3",
            "parent_id": "8310"
        },
        {
            "id": "831006",
            "name": "策勒县",
            "level": "3",
            "parent_id": "8310"
        },
        {
            "id": "831007",
            "name": "于田县",
            "level": "3",
            "parent_id": "8310"
        },
        {
            "id": "831008",
            "name": "民丰县",
            "level": "3",
            "parent_id": "8310"
        },
        {
            "id": "831101",
            "name": "阿克苏市",
            "level": "3",
            "parent_id": "8311"
        },
        {
            "id": "831102",
            "name": "温宿县",
            "level": "3",
            "parent_id": "8311"
        },
        {
            "id": "831103",
            "name": "库车县",
            "level": "3",
            "parent_id": "8311"
        },
        {
            "id": "831104",
            "name": "沙雅县",
            "level": "3",
            "parent_id": "8311"
        },
        {
            "id": "831105",
            "name": "新和县",
            "level": "3",
            "parent_id": "8311"
        },
        {
            "id": "831106",
            "name": "拜城县",
            "level": "3",
            "parent_id": "8311"
        },
        {
            "id": "831107",
            "name": "乌什县",
            "level": "3",
            "parent_id": "8311"
        },
        {
            "id": "831108",
            "name": "阿瓦提县",
            "level": "3",
            "parent_id": "8311"
        },
        {
            "id": "831109",
            "name": "柯坪县",
            "level": "3",
            "parent_id": "8311"
        },
        {
            "id": "831201",
            "name": "阿图什市",
            "level": "3",
            "parent_id": "8312"
        },
        {
            "id": "831202",
            "name": "阿克陶县",
            "level": "3",
            "parent_id": "8312"
        },
        {
            "id": "831203",
            "name": "阿合奇县",
            "level": "3",
            "parent_id": "8312"
        },
        {
            "id": "831204",
            "name": "乌恰县",
            "level": "3",
            "parent_id": "8312"
        },
        {
            "id": "831301",
            "name": "喀什市",
            "level": "3",
            "parent_id": "8313"
        },
        {
            "id": "831302",
            "name": "疏附县",
            "level": "3",
            "parent_id": "8313"
        },
        {
            "id": "831303",
            "name": "疏勒县",
            "level": "3",
            "parent_id": "8313"
        },
        {
            "id": "831304",
            "name": "英吉沙县",
            "level": "3",
            "parent_id": "8313"
        },
        {
            "id": "831305",
            "name": "泽普县",
            "level": "3",
            "parent_id": "8313"
        },
        {
            "id": "831306",
            "name": "莎车县",
            "level": "3",
            "parent_id": "8313"
        },
        {
            "id": "831307",
            "name": "叶城县",
            "level": "3",
            "parent_id": "8313"
        },
        {
            "id": "831308",
            "name": "麦盖提县",
            "level": "3",
            "parent_id": "8313"
        },
        {
            "id": "831309",
            "name": "岳普湖县",
            "level": "3",
            "parent_id": "8313"
        },
        {
            "id": "831310",
            "name": "伽师县",
            "level": "3",
            "parent_id": "8313"
        },
        {
            "id": "831311",
            "name": "巴楚县",
            "level": "3",
            "parent_id": "8313"
        },
        {
            "id": "831312",
            "name": "塔什库尔干",
            "level": "3",
            "parent_id": "8313"
        },
        {
            "id": "831402",
            "name": "独山子区",
            "level": "3",
            "parent_id": "8314"
        },
        {
            "id": "831403",
            "name": "克拉玛依区",
            "level": "3",
            "parent_id": "8314"
        },
        {
            "id": "831404",
            "name": "白碱滩区",
            "level": "3",
            "parent_id": "8314"
        },
        {
            "id": "831405",
            "name": "乌尔禾区",
            "level": "3",
            "parent_id": "8314"
        },
        {
            "id": "840102",
            "name": "城关区",
            "level": "3",
            "parent_id": "8401"
        },
        {
            "id": "840103",
            "name": "七里河区",
            "level": "3",
            "parent_id": "8401"
        },
        {
            "id": "840104",
            "name": "西固区",
            "level": "3",
            "parent_id": "8401"
        },
        {
            "id": "840105",
            "name": "安宁区",
            "level": "3",
            "parent_id": "8401"
        },
        {
            "id": "840106",
            "name": "红古区",
            "level": "3",
            "parent_id": "8401"
        },
        {
            "id": "840107",
            "name": "永登县",
            "level": "3",
            "parent_id": "8401"
        },
        {
            "id": "840108",
            "name": "皋兰县",
            "level": "3",
            "parent_id": "8401"
        },
        {
            "id": "840109",
            "name": "榆中县",
            "level": "3",
            "parent_id": "8401"
        },
        {
            "id": "840110",
            "name": "开发区",
            "level": "3",
            "parent_id": "8401"
        },
        {
            "id": "840202",
            "name": "秦州区",
            "level": "3",
            "parent_id": "8402"
        },
        {
            "id": "840203",
            "name": "麦积区",
            "level": "3",
            "parent_id": "8402"
        },
        {
            "id": "840204",
            "name": "清水县",
            "level": "3",
            "parent_id": "8402"
        },
        {
            "id": "840205",
            "name": "秦安县",
            "level": "3",
            "parent_id": "8402"
        },
        {
            "id": "840206",
            "name": "甘谷县",
            "level": "3",
            "parent_id": "8402"
        },
        {
            "id": "840207",
            "name": "武山县",
            "level": "3",
            "parent_id": "8402"
        },
        {
            "id": "840208",
            "name": "张家川县",
            "level": "3",
            "parent_id": "8402"
        },
        {
            "id": "840209",
            "name": "开发区",
            "level": "3",
            "parent_id": "8402"
        },
        {
            "id": "840402",
            "name": "凉州区",
            "level": "3",
            "parent_id": "8404"
        },
        {
            "id": "840403",
            "name": "民勤县",
            "level": "3",
            "parent_id": "8404"
        },
        {
            "id": "840404",
            "name": "古浪县",
            "level": "3",
            "parent_id": "8404"
        },
        {
            "id": "840405",
            "name": "天祝县",
            "level": "3",
            "parent_id": "8404"
        },
        {
            "id": "840502",
            "name": "金川区",
            "level": "3",
            "parent_id": "8405"
        },
        {
            "id": "840503",
            "name": "永昌县",
            "level": "3",
            "parent_id": "8405"
        },
        {
            "id": "840504",
            "name": "开发区",
            "level": "3",
            "parent_id": "8405"
        },
        {
            "id": "840602",
            "name": "肃州区",
            "level": "3",
            "parent_id": "8406"
        },
        {
            "id": "840603",
            "name": "金塔县",
            "level": "3",
            "parent_id": "8406"
        },
        {
            "id": "840604",
            "name": "瓜州县",
            "level": "3",
            "parent_id": "8406"
        },
        {
            "id": "840605",
            "name": "肃北县",
            "level": "3",
            "parent_id": "8406"
        },
        {
            "id": "840606",
            "name": "阿克塞县",
            "level": "3",
            "parent_id": "8406"
        },
        {
            "id": "840607",
            "name": "玉门市",
            "level": "3",
            "parent_id": "8406"
        },
        {
            "id": "840608",
            "name": "敦煌市",
            "level": "3",
            "parent_id": "8406"
        },
        {
            "id": "840702",
            "name": "甘州区",
            "level": "3",
            "parent_id": "8407"
        },
        {
            "id": "840703",
            "name": "肃南县",
            "level": "3",
            "parent_id": "8407"
        },
        {
            "id": "840704",
            "name": "民乐县",
            "level": "3",
            "parent_id": "8407"
        },
        {
            "id": "840705",
            "name": "临泽县",
            "level": "3",
            "parent_id": "8407"
        },
        {
            "id": "840706",
            "name": "高台县",
            "level": "3",
            "parent_id": "8407"
        },
        {
            "id": "840707",
            "name": "山丹县",
            "level": "3",
            "parent_id": "8407"
        },
        {
            "id": "840802",
            "name": "西峰区",
            "level": "3",
            "parent_id": "8408"
        },
        {
            "id": "840803",
            "name": "庆城县",
            "level": "3",
            "parent_id": "8408"
        },
        {
            "id": "840804",
            "name": "环县",
            "level": "3",
            "parent_id": "8408"
        },
        {
            "id": "840805",
            "name": "华池县",
            "level": "3",
            "parent_id": "8408"
        },
        {
            "id": "840806",
            "name": "合水县",
            "level": "3",
            "parent_id": "8408"
        },
        {
            "id": "840807",
            "name": "正宁县",
            "level": "3",
            "parent_id": "8408"
        },
        {
            "id": "840808",
            "name": "宁县",
            "level": "3",
            "parent_id": "8408"
        },
        {
            "id": "840809",
            "name": "镇原县",
            "level": "3",
            "parent_id": "8408"
        },
        {
            "id": "840902",
            "name": "崆峒区",
            "level": "3",
            "parent_id": "8409"
        },
        {
            "id": "840903",
            "name": "泾川县",
            "level": "3",
            "parent_id": "8409"
        },
        {
            "id": "840904",
            "name": "灵台县",
            "level": "3",
            "parent_id": "8409"
        },
        {
            "id": "840905",
            "name": "崇信县",
            "level": "3",
            "parent_id": "8409"
        },
        {
            "id": "840906",
            "name": "华亭县",
            "level": "3",
            "parent_id": "8409"
        },
        {
            "id": "840907",
            "name": "庄浪县",
            "level": "3",
            "parent_id": "8409"
        },
        {
            "id": "840908",
            "name": "静宁县",
            "level": "3",
            "parent_id": "8409"
        },
        {
            "id": "841002",
            "name": "白银区",
            "level": "3",
            "parent_id": "8410"
        },
        {
            "id": "841003",
            "name": "平川区",
            "level": "3",
            "parent_id": "8410"
        },
        {
            "id": "841004",
            "name": "靖远县",
            "level": "3",
            "parent_id": "8410"
        },
        {
            "id": "841005",
            "name": "会宁县",
            "level": "3",
            "parent_id": "8410"
        },
        {
            "id": "841006",
            "name": "景泰县",
            "level": "3",
            "parent_id": "8410"
        },
        {
            "id": "841007",
            "name": "高新区",
            "level": "3",
            "parent_id": "8410"
        },
        {
            "id": "841102",
            "name": "安定区",
            "level": "3",
            "parent_id": "8411"
        },
        {
            "id": "841103",
            "name": "通渭县",
            "level": "3",
            "parent_id": "8411"
        },
        {
            "id": "841104",
            "name": "陇西县",
            "level": "3",
            "parent_id": "8411"
        },
        {
            "id": "841105",
            "name": "渭源县",
            "level": "3",
            "parent_id": "8411"
        },
        {
            "id": "841106",
            "name": "临洮县",
            "level": "3",
            "parent_id": "8411"
        },
        {
            "id": "841107",
            "name": "漳县",
            "level": "3",
            "parent_id": "8411"
        },
        {
            "id": "841108",
            "name": "岷县",
            "level": "3",
            "parent_id": "8411"
        },
        {
            "id": "841202",
            "name": "武都区",
            "level": "3",
            "parent_id": "8412"
        },
        {
            "id": "841203",
            "name": "成县",
            "level": "3",
            "parent_id": "8412"
        },
        {
            "id": "841204",
            "name": "文县",
            "level": "3",
            "parent_id": "8412"
        },
        {
            "id": "841205",
            "name": "宕昌县",
            "level": "3",
            "parent_id": "8412"
        },
        {
            "id": "841206",
            "name": "康县",
            "level": "3",
            "parent_id": "8412"
        },
        {
            "id": "841207",
            "name": "西和县",
            "level": "3",
            "parent_id": "8412"
        },
        {
            "id": "841208",
            "name": "礼县",
            "level": "3",
            "parent_id": "8412"
        },
        {
            "id": "841209",
            "name": "徽县",
            "level": "3",
            "parent_id": "8412"
        },
        {
            "id": "841210",
            "name": "两当县",
            "level": "3",
            "parent_id": "8412"
        },
        {
            "id": "841301",
            "name": "临夏市",
            "level": "3",
            "parent_id": "8413"
        },
        {
            "id": "841302",
            "name": "临夏县",
            "level": "3",
            "parent_id": "8413"
        },
        {
            "id": "841303",
            "name": "康乐县",
            "level": "3",
            "parent_id": "8413"
        },
        {
            "id": "841304",
            "name": "永靖县",
            "level": "3",
            "parent_id": "8413"
        },
        {
            "id": "841305",
            "name": "广河县",
            "level": "3",
            "parent_id": "8413"
        },
        {
            "id": "841306",
            "name": "和政县",
            "level": "3",
            "parent_id": "8413"
        },
        {
            "id": "841307",
            "name": "东乡族自治县",
            "level": "3",
            "parent_id": "8413"
        },
        {
            "id": "841308",
            "name": "积石山县",
            "level": "3",
            "parent_id": "8413"
        },
        {
            "id": "841401",
            "name": "合作市",
            "level": "3",
            "parent_id": "8414"
        },
        {
            "id": "841402",
            "name": "临潭县",
            "level": "3",
            "parent_id": "8414"
        },
        {
            "id": "841403",
            "name": "卓尼县",
            "level": "3",
            "parent_id": "8414"
        },
        {
            "id": "841404",
            "name": "舟曲县",
            "level": "3",
            "parent_id": "8414"
        },
        {
            "id": "841405",
            "name": "迭部县",
            "level": "3",
            "parent_id": "8414"
        },
        {
            "id": "841406",
            "name": "玛曲县",
            "level": "3",
            "parent_id": "8414"
        },
        {
            "id": "841407",
            "name": "碌曲县",
            "level": "3",
            "parent_id": "8414"
        },
        {
            "id": "841408",
            "name": "夏河县",
            "level": "3",
            "parent_id": "8414"
        },
        {
            "id": "841961",
            "name": "全境",
            "level": "3",
            "parent_id": "1001"
        },
        {
            "id": "841962",
            "name": "全境",
            "level": "3",
            "parent_id": "1002"
        },
        {
            "id": "841963",
            "name": "全境",
            "level": "3",
            "parent_id": "1005"
        },
        {
            "id": "841964",
            "name": "全境",
            "level": "3",
            "parent_id": "1006"
        },
        {
            "id": "841965",
            "name": "全境",
            "level": "3",
            "parent_id": "1007"
        },
        {
            "id": "841966",
            "name": "全境",
            "level": "3",
            "parent_id": "1008"
        },
        {
            "id": "841967",
            "name": "全境",
            "level": "3",
            "parent_id": "1009"
        },
        {
            "id": "841968",
            "name": "全境",
            "level": "3",
            "parent_id": "1010"
        },
        {
            "id": "841969",
            "name": "全境",
            "level": "3",
            "parent_id": "1011"
        },
        {
            "id": "841970",
            "name": "全境",
            "level": "3",
            "parent_id": "1012"
        },
        {
            "id": "841971",
            "name": "全境",
            "level": "3",
            "parent_id": "1013"
        },
        {
            "id": "841972",
            "name": "全境",
            "level": "3",
            "parent_id": "1014"
        },
        {
            "id": "841973",
            "name": "全境",
            "level": "3",
            "parent_id": "1015"
        },
        {
            "id": "841974",
            "name": "全境",
            "level": "3",
            "parent_id": "1016"
        },
        {
            "id": "841975",
            "name": "全境",
            "level": "3",
            "parent_id": "1017"
        },
        {
            "id": "841976",
            "name": "全境",
            "level": "3",
            "parent_id": "1018"
        },
        {
            "id": "841977",
            "name": "全境",
            "level": "3",
            "parent_id": "1019"
        },
        {
            "id": "841978",
            "name": "全境",
            "level": "3",
            "parent_id": "1101"
        },
        {
            "id": "841979",
            "name": "全境",
            "level": "3",
            "parent_id": "1102"
        },
        {
            "id": "841980",
            "name": "全境",
            "level": "3",
            "parent_id": "1103"
        },
        {
            "id": "841981",
            "name": "全境",
            "level": "3",
            "parent_id": "1104"
        },
        {
            "id": "841982",
            "name": "全境",
            "level": "3",
            "parent_id": "1105"
        },
        {
            "id": "841983",
            "name": "全境",
            "level": "3",
            "parent_id": "1106"
        },
        {
            "id": "841984",
            "name": "全境",
            "level": "3",
            "parent_id": "1107"
        },
        {
            "id": "841985",
            "name": "全境",
            "level": "3",
            "parent_id": "1110"
        },
        {
            "id": "841986",
            "name": "全境",
            "level": "3",
            "parent_id": "1111"
        },
        {
            "id": "841987",
            "name": "全境",
            "level": "3",
            "parent_id": "1112"
        },
        {
            "id": "841988",
            "name": "全境",
            "level": "3",
            "parent_id": "1113"
        },
        {
            "id": "841989",
            "name": "全境",
            "level": "3",
            "parent_id": "1114"
        },
        {
            "id": "841990",
            "name": "全境",
            "level": "3",
            "parent_id": "1115"
        },
        {
            "id": "841991",
            "name": "全境",
            "level": "3",
            "parent_id": "1116"
        },
        {
            "id": "841992",
            "name": "全境",
            "level": "3",
            "parent_id": "1117"
        },
        {
            "id": "841993",
            "name": "全境",
            "level": "3",
            "parent_id": "1118"
        },
        {
            "id": "841994",
            "name": "全境",
            "level": "3",
            "parent_id": "1119"
        },
        {
            "id": "841995",
            "name": "全境",
            "level": "3",
            "parent_id": "3001"
        },
        {
            "id": "841996",
            "name": "全境",
            "level": "3",
            "parent_id": "3002"
        },
        {
            "id": "841997",
            "name": "全境",
            "level": "3",
            "parent_id": "3004"
        },
        {
            "id": "841998",
            "name": "全境",
            "level": "3",
            "parent_id": "3005"
        },
        {
            "id": "841999",
            "name": "全境",
            "level": "3",
            "parent_id": "3006"
        },
        {
            "id": "842000",
            "name": "全境",
            "level": "3",
            "parent_id": "3007"
        },
        {
            "id": "842001",
            "name": "全境",
            "level": "3",
            "parent_id": "3009"
        },
        {
            "id": "842002",
            "name": "全境",
            "level": "3",
            "parent_id": "3010"
        },
        {
            "id": "842003",
            "name": "全境",
            "level": "3",
            "parent_id": "3011"
        },
        {
            "id": "842004",
            "name": "全境",
            "level": "3",
            "parent_id": "3012"
        },
        {
            "id": "842005",
            "name": "全境",
            "level": "3",
            "parent_id": "3013"
        },
        {
            "id": "842006",
            "name": "全境",
            "level": "3",
            "parent_id": "3014"
        },
        {
            "id": "842007",
            "name": "全境",
            "level": "3",
            "parent_id": "3015"
        },
        {
            "id": "842008",
            "name": "全境",
            "level": "3",
            "parent_id": "3016"
        },
        {
            "id": "842009",
            "name": "全境",
            "level": "3",
            "parent_id": "3017"
        },
        {
            "id": "842010",
            "name": "全境",
            "level": "3",
            "parent_id": "3018"
        },
        {
            "id": "842011",
            "name": "全境",
            "level": "3",
            "parent_id": "3019"
        },
        {
            "id": "842012",
            "name": "全境",
            "level": "3",
            "parent_id": "6001"
        },
        {
            "id": "842013",
            "name": "全境",
            "level": "3",
            "parent_id": "6002"
        },
        {
            "id": "842014",
            "name": "全境",
            "level": "3",
            "parent_id": "6003"
        },
        {
            "id": "842015",
            "name": "全境",
            "level": "3",
            "parent_id": "6004"
        },
        {
            "id": "842016",
            "name": "全境",
            "level": "3",
            "parent_id": "6005"
        },
        {
            "id": "842017",
            "name": "全境",
            "level": "3",
            "parent_id": "6006"
        },
        {
            "id": "842018",
            "name": "全境",
            "level": "3",
            "parent_id": "6007"
        },
        {
            "id": "842019",
            "name": "全境",
            "level": "3",
            "parent_id": "6008"
        },
        {
            "id": "842020",
            "name": "全境",
            "level": "3",
            "parent_id": "6009"
        },
        {
            "id": "842021",
            "name": "全境",
            "level": "3",
            "parent_id": "6010"
        },
        {
            "id": "842022",
            "name": "全境",
            "level": "3",
            "parent_id": "6011"
        },
        {
            "id": "842023",
            "name": "全境",
            "level": "3",
            "parent_id": "6012"
        },
        {
            "id": "842024",
            "name": "全境",
            "level": "3",
            "parent_id": "6013"
        },
        {
            "id": "842025",
            "name": "全境",
            "level": "3",
            "parent_id": "6014"
        },
        {
            "id": "842026",
            "name": "全境",
            "level": "3",
            "parent_id": "6015"
        },
        {
            "id": "842027",
            "name": "全境",
            "level": "3",
            "parent_id": "6016"
        },
        {
            "id": "842028",
            "name": "全境",
            "level": "3",
            "parent_id": "6017"
        },
        {
            "id": "842029",
            "name": "全境",
            "level": "3",
            "parent_id": "6018"
        },
        {
            "id": "842030",
            "name": "全境",
            "level": "3",
            "parent_id": "6019"
        },
        {
            "id": "842031",
            "name": "全境",
            "level": "3",
            "parent_id": "6020"
        },
        {
            "id": "842032",
            "name": "全境",
            "level": "3",
            "parent_id": "6021"
        },
        {
            "id": "842033",
            "name": "全境",
            "level": "3",
            "parent_id": "6022"
        },
        {
            "id": "842034",
            "name": "全境",
            "level": "3",
            "parent_id": "6023"
        },
        {
            "id": "842035",
            "name": "全境",
            "level": "3",
            "parent_id": "6024"
        },
        {
            "id": "842036",
            "name": "全境",
            "level": "3",
            "parent_id": "6025"
        },
        {
            "id": "842037",
            "name": "全境",
            "level": "3",
            "parent_id": "6026"
        },
        {
            "id": "842038",
            "name": "全境",
            "level": "3",
            "parent_id": "6027"
        },
        {
            "id": "842039",
            "name": "全境",
            "level": "3",
            "parent_id": "6028"
        },
        {
            "id": "842040",
            "name": "全境",
            "level": "3",
            "parent_id": "6029"
        },
        {
            "id": "842041",
            "name": "全境",
            "level": "3",
            "parent_id": "6030"
        },
        {
            "id": "842042",
            "name": "全境",
            "level": "3",
            "parent_id": "6031"
        },
        {
            "id": "842043",
            "name": "全境",
            "level": "3",
            "parent_id": "6032"
        },
        {
            "id": "842044",
            "name": "全境",
            "level": "3",
            "parent_id": "6033"
        },
        {
            "id": "842045",
            "name": "全境",
            "level": "3",
            "parent_id": "6034"
        },
        {
            "id": "842046",
            "name": "全境",
            "level": "3",
            "parent_id": "6035"
        },
        {
            "id": "842047",
            "name": "全境",
            "level": "3",
            "parent_id": "6036"
        },
        {
            "id": "842048",
            "name": "全境",
            "level": "3",
            "parent_id": "6037"
        },
        {
            "id": "842049",
            "name": "全境",
            "level": "3",
            "parent_id": "6038"
        },
        {
            "id": "842050",
            "name": "全境",
            "level": "3",
            "parent_id": "6039"
        },
        {
            "id": "842051",
            "name": "全境",
            "level": "3",
            "parent_id": "6040"
        },
        {
            "id": "842052",
            "name": "全境",
            "level": "3",
            "parent_id": "6041"
        },
        {
            "id": "842053",
            "name": "全境",
            "level": "2",
            "parent_id": "90"
        },
        {
            "id": "842054",
            "name": "全境",
            "level": "3",
            "parent_id": "842053"
        },
        {
            "id": "842055",
            "name": "莞城区",
            "level": "3",
            "parent_id": "4010"
        },
        {
            "id": "842057",
            "name": "东城区",
            "level": "3",
            "parent_id": "4010"
        },
        {
            "id": "842058",
            "name": "万江区",
            "level": "3",
            "parent_id": "4010"
        },
        {
            "id": "842059",
            "name": "南城区",
            "level": "3",
            "parent_id": "4010"
        }
    ]
    return json2;
}


