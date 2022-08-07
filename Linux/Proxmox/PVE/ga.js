
_gaq.push(['_trackPageview']);

var disqus_config = function ()
 {
     var config = this;
     config.callbacks.onNewComment.push (function () 
     {
         _gaq.push (['_trackEvent', 'Disqus', 'Comment', 'null', 1]);
     });
 }; 

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www/') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var WinAddBooks = '   <hr/><div class="itemizedlist">'+
'	<ul class="itemizedlist" type="disc"><p>Дополнительные ссылки:</p>'+
'	 <li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/OffensiveShellcodeScratch/content/index.html" target="_top">Атакующий код запуска оболочки с нуля</a>, Ришалин Пиллэй, май 2022</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/PowershellFastTrack/content/index.html" target="_top">Ускоренное продвижение PowerShell: хакерство для не- программистов</a>, Викас Сухиджа, ноябрь 2021</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/WindowsServerAutomationCookbook.4th/content/index.html" target="_top">Книга рецептов автоматизации Windows Server при помощи PowerShell, 4е изд.</a>, Томас Ли, июль 2021</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/ProWindowsSubsystemLinux/content/index.html" target="_top">Linux подсистема Windows (WSL) для профессионалов</a>, Хайден Барнс, Apress, июнь 2021</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/LearnWindowsSubsystemLinuxProfessionals/content/Ch05.html" target="_top">Изучаем подсистемы Windows для Linux</a>, Прэйтик Сингх, Apress, сентябрь 2020</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringActiveDirectory.2ed/content/Ch18.html" target="_top">Active Directory Полное руководство</a>. 2е изд., частичный перевод, Дишан Франсис, Packt Publishing, август 2019</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringAnsible.3ed/content/index.html" target="_top">Полное руководство Ansible</a>. 3е изд., Джеймс Фриман и Джесс Китинг, Packt Publishing, март 2019</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/PowershellPythonTogether/content/index.html" target="_top">PowerShell и Python сообща - настроены на цифровые расследования</a> Чет Хосмер, Apress, Октябрь 2018</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringWindowsServer2019.2ed/content/index.html" target="_top">Windows Server 2019. Полное руководство - 2е изд</a> Джордан Краузе, Packt Publishing, март 2019</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/DockerRailsDevelopersApplicationsEverywhere/content/index.html" target="_top">Docker для разработчиков Rails</a> Роб Айзенберг, The Pragmatic Programmers, LLC., февраль 2019, с дополнениями по настройкам Django и 100Gb IB</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/ProSQLServerOnLinux/content/Ch11.html" target="_top">Глава 11. SQL Server и контейнеры</a> (включая Kubernetes) Боб Вордс, &quot;Профессиональный SQL Server поверх Linux&quot;, Apress, октябрь 2018</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="https://www.packtpub.com/virtualization-and-cloud/windows-server-2016-administration-fundamentals" target="_top">Windows Server 2016 Administration Fundamentals</a> Bekim Dauti, ISBN: 978-1-78862-656-9</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringWindowsServer2016HyperV/content/index.html" target="_top">Windows Server 2016 Hyper- V. Полное руководство</a>, Джон Сэйвиль</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/SQLServer2016HighAvailabilityUnleashed/content/Ch05.html" target="_top"> SQL Server 2016 с высокой доступностью. Выпущенный на волю.</a>, Поль Бертуччи, Раджу Шривастава</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/WindowsInternalsPart1.7Ed/content/Ch04.html" target="_top">Внутреннее устройство Windows, Часть 1, 7е изд.</a>, Павел Йосифович, Алекс Ионеску, Марк Э. Руссинович, Дэвид А. Соломон</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/WindowsServer2016InsideOut/content/Ch06.html" target="_top"> Windows Server 2016 наизнанку</a>, Оурин Томас</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/ExamRef70743/content/Ch10.html" target="_top">Exam Ref 70-743. Обновление ваших навыков MCSA: Windows Server 2016</a>, Чарли Плута</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/InstallationStorageComputeWindowsServer2016ExamRef70740/content/index.html" target="_top">Exam Ref 70-740. Установка, хранение и вычисления с Windows Server 2016.</a>, Крейг Заккер</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/WindowsServer2016HyperVCookbook2nd/content/Ch05.html" target="_top">Windows Server 2016 Hyper-V Книга рецептов. 2е изд</a>, Патрик Лоундс, Чарбел Немном, Леанардо Карваль</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/WindowsServer2016Cookbook/content/index.html" target="_top">Windows Server 2016. Книга рецептов</a>, Джордан Краузе</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/HyperV2016BestPractices/content/index.html" target="_top">Hyper-V 2016 Практический опыт. 2е изд.</a>, Бенедикт Бергер, Ромейн Серре</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringZabbix.2ed/content/Ch04.html" target="_top">Zabbix. Полное руководство. 2е изд.</a>, Андреа Далле Ваккье</p>'+
'	 </li>'+
'    </ul>'+
'   </div>';
var CephAddBooks = '   <hr/><div class="itemizedlist">'+
'	<ul class="itemizedlist" type="disc"><p>Дополнительные ссылки:</p>'+
'	 <li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/OffensiveShellcodeScratch/content/index.html" target="_top">Атакующий код запуска оболочки с нуля</a>, Ришалин Пиллэй, май 2022</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/ProWindowsSubsystemLinux/content/index.html" target="_top">Linux подсистема Windows (WSL) для профессионалов</a>, Хайден Барнс, Apress, июнь 2021</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/CPythonInternals/content/Ch10.html" target="_top">Внутреннее устройство CPython</a>, Энтони Шоу, Real Python, январь 2021</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/LinuxContainersVirtualizationKernelPerspective/content/Ch06.html" target="_top">Контейнеры Linux и Виртуализация: с точки зрения ядра</a>, Шашанк Мохан Джейн, Apress, октябрь 2020</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/LearnWindowsSubsystemLinuxProfessionals/content/Ch05.html" target="_top">Изучаем подсистемы Windows для Linux</a>, Прэйтик Сингх, Apress, сентябрь 2020</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/RabbitMQEssentialsDistributedScalableApplications.2nd/content/index.html" target="_top">Всё что требуется для RabbitMQ</a>, 2е изд., Ловайса Йохансон, Дэйвид Доссо, Packt Publishing, август 2020</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/HandsonBooting/content/index.html" target="_top">Практика загрузки. Изучение процесса загрузки Linux, Windows и Unix</a>, Йогеш Бабар, Apress, июль 2020</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/DistributedSystemsForPractitioners/content/Ch07.html" target="_top">Распределённые системы для практиков</a>, Даймос Раптис, Learnpub, май 2020</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/HandsOnEnterpriseAutomationOnLinux/content/index.html" target="_top">Практическая автоматизация предприятия в Linux</a>, Джеймс Фриман, Packt Publishing, январь 2020, Действенное выполнение крупномасштабной автоматизации инфраструктуры Linux с применением Ansible.</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/DatabaseInternals/content/index.html" target="_top">Внутреннее устройство баз данных</a>, Алекс Петров, O`Reilly Media, Inc., октябрь 2019</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/PythonParallelProgrammingCookbook.2nd/content/index.html" target="_top">Книга рецептов параллельного программирования Python</a>. 2е изд., Джанкарло Закконе, Packt Publishing, сентябрь 2019</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringAnsible.3ed/content/index.html" target="_top">Полное руководство Ansible</a>. 3е изд., Джеймс Фриман и Джесс Китинг, Packt Publishing, март 2019</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/NGINXCookbook/content/index.html" target="_top">Книга рецептов NGINX</a> Дерек ДеДжонге,  O’Reilly Media, Inc, ноябрь 2018</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringCeph.2ed/content/index.html" target="_top">Полное руководство Ceph, 2е изд.</a> Ник Фиск, Packt Publishing, февраль 2019</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/DockerRailsDevelopersApplicationsEverywhere/content/index.html" target="_top">Docker для разработчиков Rails</a> Роб Айзенберг, The Pragmatic Programmers, LLC., февраль 2019, с дополнениями по настройкам Django и 100Gb IB</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/ProSQLServerOnLinux/content/Ch11.html" target="_top">Глава 11. SQL Server и контейнеры</a> (включая Kubernetes) Боб Вордс, &quot;Профессиональный SQL Server поверх Linux&quot;, Apress, октябрь 2018</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringConcurrencyInPython/content/index.html" target="_top">Полное руководство параллельного программирования на Python</a> Куан Нгуен, Packt Publishing, ноябрь 2018</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/UsingAsyncioPython3/content/index.html" target="_top">Asyncio в Python 3</a> Цалеб Хаттингх, O’Reilly Media, Inc, март 2018</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/RabbitMQInDepth/content/index.html" target="_top">RabbitMQ для профессионалов</a> Гайвин Рой, Manning Publications, сентябрь 2017</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="Ch06.html"/*tpa=http://onreader.mdl.ru/MasteringProxmox.3ed/content/Ch06.html*/ target="_top">Proxmox. Полное руководство. 3е изд</a> Васим Ахмед, Packt Publishing, ноябрь 2017</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/CephCookbook.2ed/content/index.html" target="_top">Книга рецептов Ceph, 2е изд</a> Викхайят Умрао,Мишель Хаккет,Каран Сингх, Packt Publishing, ноябрь 2017</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/LearningCeph2ed/content/index.html" target="_top">Изучаем Ceph</a>, 2е изд., Энтони Д`Атри, Вайбхав Бхембре, Каран Сингх, Packt Publishing, октябрь 2017</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/KVMVirtualizationCookbook/content/Ch08.html" target="_top">Книга рецептов виртуализации KVM</a> Константин Иванов, Packt Publishing, июнь 2017</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringPythonNetworking/content/index.html" target="_top">Полное руководство работы с сетями на Python</a>. Эрик Чоу, Июнь 2017</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/ContainerizationWithLXC/content/index.html" target="_top"> Контейнеризация при помощи LXC</a> Константин Иванов, Packt Publishing, март 2017</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringProxmox.2ed/content/index.html" target="_top">Proxmox. Полное руководство</a>. 2е изд., Васим Ахмед, Packt Publishing, май 2016</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/CephCookbook/content/index.html" target="_top">Книга рецептов Ceph</a> Каран Сингх, Packt Publishing, февраль 2016</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/VirtualizationComplete/content/index.html" target="_top">Полная виртуализация. Базовая коммерческая редакция</a>: Proxmox-freeNAS-Zentyal-pfSense. Ли Р. Сюрбер, февраль 2016</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/MasteringZabbix.2ed/content/Ch04.html" target="_top">Zabbix. Полное руководство</a>. 2е изд., Андреа Далле Ваккье, сентябрь 2015</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/ProxmoxCookbook/content/index.html" target="_top">Книга рецептов Proxmox. Главы 1-6, Дополнения: Преобразование OpenVZ в LXC, Организация ограждения</a> Васим Ахмед, Packt Publishing, август 2015</p>'+
'	 </li><li class="listitem">'+
'	 <p><a class="link" href="http://onreader.mdl.ru/LearningCeph/content/index.html" target="_top">Изучаем Ceph</a> Каран Сингх, Packt Publishing, январь 2015</p>'+
'	 </li>'+
'    </ul>'+
'   </div>';


