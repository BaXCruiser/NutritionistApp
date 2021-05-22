FROM openjdk:11-jre
WORKDIR /usr/src/myapp
COPY ./target/service-discovery-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]