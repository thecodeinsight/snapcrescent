package com.codeinsight.snap_crescent.photoMetadata;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

@RepositoryRestResource(exported = false)
public interface PhotoMetadataRepository extends JpaRepository<PhotoMetadata, Long>, QuerydslPredicateExecutor<PhotoMetadata>{

	@RestResource(exported = false)
	boolean existsByName(@Param("name") String name);
}
