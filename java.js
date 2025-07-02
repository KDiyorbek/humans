const translations = {
        en: {
          "title": "my <strong>Ḣumans</strong> number",
          "site-link": "site",
          "optgroup-label": "manage your number with these codes",
          "select-prompt": "⚡ select instant Codes:",
          "display": "* contact center: call <a href='tel:1234'>1234</a>.",
          "note": "* this is not an official site and is not <abbr title='(scam)'>fake</abbr>.",
          "btn-mobile": "<i class='bi bi-phone'><br><br></i>Mobile",
          "btn-mynumber": "<i class='bi bi-sim'><br><br></i>My Number",
          "btn-choosenumber": "<i class='bi bi-file-earmark-plus'><br><br></i>Choose Number",
          "btn-payments": "<i class='bi bi-cash-coin'><br><br></i>Payments",
          "btn-maincard": "<i class='bi bi-star'><br><br></i>Main Card",
          "btn-cards": "<i class='bi bi-credit-card'><br><br></i>Cards",
          "btn-cashback": "<i class='bi bi-wallet2'><br><br></i>Cashback Card",
          "btn-addcard": "<i class='bi bi-credit-card-2-front'><br><br></i>Add Card",
          "btn-transfer": "<i class='bi bi-send'><br><br></i>Transfer Money",
          "btn-topup": "<i class='bi bi-plus-circle-fill'><br><br></i>Top Up",
          "btn-addapps": "<i class='bi bi-infinity'><br><br></i>add app(s) to tariff",
          "btn-market": "<i class='bi bi-cart3'><br><br></i>Market",
          "btn-support": "<i class='bi bi-chat-text'><br><br></i>Support",
          "btn-settings": "<i class='bi bi-person-gear'><br><br></i>Settings"
        },
        ru: {
          "title": "мой номер <strong>Ḣumans</strong>",
          "site-link": "сайт",
          "optgroup-label": "управляйте своим номером с помощью этих кодов",
          "select-prompt": "⚡ выберите мгновенные Коды:",
          "display": "* контакт-центр: позвоните по номеру <a href='tel:1234'>1234</a>.",
          "note": "* это не официальный сайт и не является <abbr title='(мошенничество)'>поддельным</abbr>.",
          "btn-mobile": "<i class='bi bi-phone'><br><br></i>Мобильная связь",
          "btn-mynumber": "<i class='bi bi-sim'><br><br></i>Мой номер",
          "btn-choosenumber": "<i class='bi bi-file-earmark-plus'><br><br></i>Выбрать номер",
          "btn-payments": "<i class='bi bi-cash-coin'><br><br></i>Платежи",
          "btn-maincard": "<i class='bi bi-star'><br><br></i>Основная карта",
          "btn-cards": "<i class='bi bi-credit-card'><br><br></i>Карты",
          "btn-cashback": "<i class='bi bi-wallet2'><br><br></i>Кешбэк-карта",
          "btn-addcard": "<i class='bi bi-credit-card-2-front'><br><br></i>Добавить карту",
          "btn-transfer": "<i class='bi bi-send'><br><br></i>Перевести деньги",
          "btn-topup": "<i class='bi bi-plus-circle-fill'><br><br></i>Пополнить счет",
          "btn-addapps": "<i class='bi bi-infinity'><br><br></i>добавить приложение(я) к тарифу",
          "btn-market": "<i class='bi bi-cart3'><br><br></i>Маркет",
          "btn-support": "<i class='bi bi-chat-text'><br><br></i>Служба поддержки",
          "btn-settings": "<i class='bi bi-person-gear'><br><br></i>Настройки"
        },
        uz: {
            "title": "mening <strong>Ḣumans</strong> raqamim",
            "site-link": "sayt",
            "optgroup-label": "ushbu kodlar orqali raqamingizni boshqaring",
            "select-prompt": "⚡ tezkor Kodlarni tanlang:",
            "display": "* aloqa markazi:  <a href='tel:1234'>1234</a> ga bog'laning.",
            "note": "* bu rasmiy sayt emas va <abbr title='(firibgarlik)'>soxta</abbr> emas.",
            "btn-mobile": "<i class='bi bi-phone'><br><br></i>Mobil aloqa",
            "btn-mynumber": "<i class='bi bi-sim'><br><br></i>Mening raqamim",
            "btn-choosenumber": "<i class='bi bi-file-earmark-plus'><br><br></i>Raqam tanlash",
            "btn-payments": "<i class='bi bi-cash-coin'><br><br></i>To'lovlar",
            "btn-maincard": "<i class='bi bi-star'><br><br></i>Asosiy karta",
            "btn-cards": "<i class='bi bi-credit-card'><br><br></i>Kartalar",
            "btn-cashback": "<i class='bi bi-wallet2'><br><br></i>Keshbek karta",
            "btn-addcard": "<i class='bi bi-credit-card-2-front'><br><br></i>Karta qo'shish",
            "btn-transfer": "<i class='bi bi-send'><br><br></i>Pul o'tkazish",
            "btn-topup": "<i class='bi bi-plus-circle-fill'><br><br></i>Hisobni to'ldirish",
            "btn-addapps": "<i class='bi bi-infinity'><br><br></i>tarifga ilova(lar) qo'shish",
            "btn-market": "<i class='bi bi-cart3'><br><br></i>Market",
            "btn-support": "<i class='bi bi-chat-text'><br><br></i>Qo'llab-quvvatlash xizmati",
            "btn-settings": "<i class='bi bi-person-gear'><br><br></i>Sozlamalar"
        }
      };
      
      const languages = ['uz', 'en', 'ru'];
      const langNames = {
          'uz': 'O\'zbekcha',
          'en': 'English',
          'ru': 'Русский'
      };
      let currentLangIndex = 0;

      function changeLanguage(lang) {
        const translation = translations[lang];
        for (const id in translation) {
            const element = document.getElementById(id);
            if (element) {
                // FIX: Use .label for <optgroup> and .innerHTML for others
                if (element.tagName === 'OPTGROUP') {
                    element.label = translation[id];
                } else {
                    element.innerHTML = translation[id];
                }
            }
        }
        document.documentElement.lang = lang === 'uz' ? 'uz-UZ' : lang;
        document.getElementById('lang-switcher').innerText = langNames[lang];
      }
      
      function cycleLanguage() {
          currentLangIndex = (currentLangIndex + 1) % languages.length;
          const nextLang = languages[currentLangIndex];
          changeLanguage(nextLang);
      }