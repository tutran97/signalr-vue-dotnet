using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheCallCenter.Data.Entities
{
    public class Call
    {
        // string ApiKey { get; set; }
        // [Required]
        // public int DataID { get; set; }
        // [Required]
        // public string SerialNumber { get; set; }
        // [Required]
        // public string OriginalPictureUrl { get; set; }
        // [Required]
        // public string FaceUrl { get; set; }
        // [Required]
        // public int Match { get; set; }
        // [Required]
        // //
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Problem { get; set; }

        public DateTime CallTime { get; set; } = DateTime.UtcNow;

        public bool Answered { get; set; } = false;

        public DateTime AnswerTime { get; set; } = DateTime.MinValue;
    }
}
