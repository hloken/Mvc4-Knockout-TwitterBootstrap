using System.Collections.Generic;
using System.Web.Mvc;

namespace MvcApplication.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public JsonResult LoadContacts()
        {
            var contacts = new List<Contact>
                {
                    new Contact
                        {
                            FirstName = "Ben",
                            LastName = "Doe",
                            Title = "Developer",
                            Email = "myemail@code.com",
                            Phone = "888-555-6565"
                        },
                    new Contact
                        {
                            FirstName = "John",
                            LastName = "Smith",
                            Title = "Boss",
                            Email = "boss@code.com",
                            Phone = "888-555-7777"
                        }
                };
            return Json(contacts);
        }
    }

    public class Contact
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Title { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }
    }
}
