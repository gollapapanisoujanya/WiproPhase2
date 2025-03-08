using Microsoft.EntityFrameworkCore;

namespace RazorCutomer.Models
{
    public class CustomerDbContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public CustomerDbContext(DbContextOptions<CustomerDbContext>options):base(options)
        {

        }

    }
}
