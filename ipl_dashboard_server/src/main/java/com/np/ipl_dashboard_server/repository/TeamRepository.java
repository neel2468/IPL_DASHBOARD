package com.np.ipl_dashboard_server.repository;

import com.np.ipl_dashboard_server.model.Team;

import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team,Long> {
    
    Team findByTeamName(String teamName);

}
