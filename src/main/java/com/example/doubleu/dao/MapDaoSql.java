package com.example.doubleu.dao;

public class MapDaoSql {
    public static final String SELECT_SEARCH = "select bi.* from lecture_info li left join building_info bi on li.building_seq = bi.building_seq where li.lecture_name like '%:searchName%'";
}
