using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RazorCutomer.Models;

namespace RazorCutomer.Pages
{
    public class IndexModel : PageModel
    {
        private readonly RazorCutomer.Models.CustomerDbContext _context;

        public IndexModel(RazorCutomer.Models.CustomerDbContext context)
        {
            _context = context;
        }

        public IList<Customer> Customer { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Customer = await _context.Customers.ToListAsync();
        }
    }
}
