FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80


FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["iPizzaRestApi/iPizzaRestApi.csproj", "iPizzaRestApi/"]
RUN dotnet restore "iPizzaRestApi/iPizzaRestApi.csproj"
COPY . .
WORKDIR "/src/iPizzaRestApi"
RUN dotnet build "iPizzaRestApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "iPizzaRestApi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "iPizzaRestApi.dll"]