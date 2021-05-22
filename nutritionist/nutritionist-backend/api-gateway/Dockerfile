FROM openjdk:11-jre
WORKDIR /usr/src/myapp
COPY ./target/api-gateway-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]