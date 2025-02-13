using Crud.Application;
using Crud.Application.Interfaces;
using Crud.Infrastructure.Persistence.DbContexts;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Se registra la DB
builder.Services.AddDbContext<DbCrudContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("conexion"));
});

builder.Services.AddTransient<IApplicationDbContext, DbCrudContext>();

builder.Services.AddApplicationServices();

builder.Services.AddCors(opt =>
{
    opt.AddPolicy("CorsPolicy", policyBuilder =>
    {
        policyBuilder.AllowAnyHeader()
        .AllowAnyMethod()
        .WithOrigins("http://localhost:4200");
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("CorsPolicy");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
