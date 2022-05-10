set names utf8;
drop database if exists vue_antd;
#创建数据库，设置存储编码
create database tp charset=utf8;
use vue_antd;
#用户信息
create table token_user(
 uid INT primary key AUTO_INCREMENT,
 token_user VARCHAR(32)
 token VARCHAR(32),
 imgCode VARCHAR(32)
);
#添加用户
insert into token_user values('1', 'root', '', '');
-- CREATE TABLE tp_index (
--   pid int(11)  PRIMARY KEY AUTO_INCREMENT,
--   title varchar(128) DEFAULT NULL,
--   detail varchar(128)  NULL,
--   pic varchar(128)  NULL,
--   price varchar(128) NULL
--  # `href` varchar(128) DEFAULT NULL,
--  # `seq_recommended` tinyint(4) DEFAULT NULL,
--  # `seq_new_arrival` tinyint(4) DEFAULT NULL,
--  # `seq_top_sale` tinyint(4) DEFAULT NULL
-- );
-- INSERT INTO `tp_index` VALUES (null, '伏格雷', '哈根达斯月饼风味酸奶冰淇淋', 'imgs/index/1.png',null);
-- INSERT INTO `tp_index` VALUES (null, '歌帝梵', 'Dipping点蘸系列', 'imgs/index/2.png',null);
-- INSERT INTO `tp_index` VALUES (null, '中街1946', '回归童年系列冰品', 'imgs/index/3.png',null);
-- INSERT INTO `tp_index` VALUES (null, 'Vivi Dolce', '糖果色系化妆品冰淇淋', 'imgs/index/4.png',null);
-- INSERT INTO `tp_index` VALUES (null, '乌云红心冰淇淋', null, 'imgs/index/one_01.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '爱心小蛋糕', null, 'imgs/index/one_02.jpg', 'imgs/index/one_03.jpg');
-- INSERT INTO `tp_index` VALUES (null, '星空棒棒糖', null, 'imgs/index/one_04.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '爱心马卡龙', null, 'imgs/index/one_05.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '泡芙', null, 'imgs/index/two_01.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '坚果曲奇', null, 'imgs/index/two_02.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '牛油泡芙', null, 'imgs/index/two_03.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '牛角包', null, 'imgs/index/two_04.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '芒果班戟', null, 'imgs/index/two_05.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '葡式蛋挞', null, 'imgs/index/two_06.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '抹茶摩提', null, 'imgs/index/two_07.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, null, null, 'imgs/index/three_01.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '八宫格', '树莓棒冰', 'imgs/index/three_02.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '自制系列', '水果棒冰', 'imgs/index/three_03.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '哈根达斯', '巧克力冰淇淋', 'imgs/index/three_04.jpg',null);
-- INSERT INTO `tp_index` VALUES (null, '许留山', '芒果冰淇淋', 'imgs/index/three_05.jpg',null);
			 
-- CREATE TABLE tp_list (
--   lid int(11)  PRIMARY KEY AUTO_INCREMENT,
--   l_title varchar(128) DEFAULT NULL,
--   l_detail varchar(128)  NULL,
--   l_pic varchar(128)  NULL,
--   l_price varchar(128) NULL
--  );
--  INSERT INTO tp_list VALUES (null, '伊利', '八宫格树莓冰棒', 'imgs/list/list_01.jpg','¥5.00');
