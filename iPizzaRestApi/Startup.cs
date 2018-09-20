using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iPizzaRestApi.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace iPizzaRestApi {
    public class Startup {
        public Startup( IConfiguration configuration ) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices( IServiceCollection services ) {
            /** We could use here any type of database but  for simplicity we'll use in-memory db **/
            services.AddDbContext<OrderContext>( opt => opt.UseInMemoryDatabase( "Orders" ) );
            services.AddCors( options =>
            {
                options.AddPolicy( "AllowAnyOrigin",
                    builder => builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .SetPreflightMaxAge(TimeSpan.FromSeconds(2520))
                    );
            } );

            services.AddMvc().SetCompatibilityVersion( CompatibilityVersion.Version_2_1 );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure( IApplicationBuilder app, IHostingEnvironment env ) {
            if ( env.IsDevelopment() ) {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors( "AllowAnyOrigin" );
            app.UseMvc();
        }
    }
}
