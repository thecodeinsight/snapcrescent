FROM maven:3.6.0-jdk-11-slim AS build
COPY snap-crescent/pom.xml /tmp/
COPY snap-crescent/src /tmp/src/
WORKDIR /tmp/
RUN mvn package

FROM openjdk:11.0.7-jre-slim
COPY --from=build /tmp/target/snap-crescent-*.jar /snap-crescent.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "snap-crescent.jar"]
