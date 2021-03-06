import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  text: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
    this.text = `

    <p>
    عميلنا العزيز
الرجاء العلم بما يلي
 <ul>
 <li>أولا: أن جميع الرسائل البريدية المعتمدة من الشركة هي الصادرة من موقعنا
 </li>
 <li>ثانيا: سنبذل قصارنا جهدنا لخدمتكم و حل الشكاوى و لكم الحق في أي وقت التقدم للهيئة العامة للرقابة المالية بالشكوى في حال عدم التوصل لحل للشكوى يرضيكم
 </li>
 </ul>

    </p>
<h2>

بيان تفصيلي بكيفية حل شكاوى العملاء
</h2>

<ol>
<li>التقدم بالشكوى يتم عن طريق زيارة مكتب الشركة أو بالتليفون أو بكتابة الشكوى على موقعنا الالكتروني
</li>
<li>.يتم تسجيل الشكوى في سجل الشكاوى بالشركة و يتضمن محتوى الشكوى أسم العميل و رقم الوثيقة
وبيانتها و وقت التقدم بالشكوى واسم مقدم الشكوى
</li>
<li>في خلال ٤٨ ساعة عمل سيقوم أحد المختصين بالشركة بالاتصال بحضراتكم و حل الشكوى
</li>
<li>في حال عدم رضاكم يتم تصعيد الشكوى لرئيس الشركة في خلال ٤٨ ساعة عمل للحل
</li>
<li>في حال عدم رضاكم يتم إخطاركم كتابيا برد شركة الوساطة النهائي و من ثم يحق لكم التقدم للهيئة العامة للرقابة المالية بالشكوى</li>
</ol>

    `;
  }

}
