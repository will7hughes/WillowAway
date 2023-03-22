using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WillowAway.Models;

namespace WillowAway.Data
{
    public class WillowAwayContext : DbContext
    {
        public WillowAwayContext (DbContextOptions<WillowAwayContext> options)
            : base(options)
        {
        }

        public DbSet<WillowAway.Models.User> User { get; set; } = default!;
    }
}
