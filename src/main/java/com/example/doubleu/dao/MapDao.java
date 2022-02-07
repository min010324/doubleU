package com.example.doubleu.dao;


import com.example.doubleu.model.BuildingInfo;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Collections;
import java.util.List;
import java.util.Map;


import static com.example.doubleu.dao.MapDaoSql.*;

@Repository
public class MapDao {
    private final NamedParameterJdbcTemplate jdbc;
    private final SimpleJdbcInsert insertAction1;
    private final SimpleJdbcInsert insertAction2;


    public MapDao(DataSource dataSource) {
        this.jdbc = new NamedParameterJdbcTemplate(dataSource);
//        private RowMapper<BuildingInfo> rowMapper = BeanPropertyRowMapper.newInstance(BuildingInfo.class);
        this.insertAction1 = new SimpleJdbcInsert(dataSource).withTableName("id_name");
        this.insertAction2 = new SimpleJdbcInsert(dataSource).withTableName("phone_id");

    }


    public List<BuildingInfo> selectSearch(String searchName) {
        Map<String, String> params = Collections.singletonMap("searchName", searchName);
        return (List<BuildingInfo>) jdbc.queryForObject(SELECT_SEARCH, params, new BeanPropertyRowMapper<>(BuildingInfo.class));
    }



}
