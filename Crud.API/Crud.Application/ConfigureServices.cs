﻿using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;


namespace Crud.Application
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddMediatR(Assembly.GetExecutingAssembly());
            return services;
        }
    }
}
