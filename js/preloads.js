
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.IegWBDja.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.BemU-tkl.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePage.DUiBZfqL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.CHMRfIXT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.9S-Ht9yW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.Dnpdy-iK.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup.DJEK_OtR.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.BH96T2RX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.Bt65ockP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.CqVb9Kgb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PurchaseOptionsAgreement.BQQHA1t8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PickupPointCarrierLogo.W5VNrG2M.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.PlTBmN_2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.BQ-wphy-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/OnePageModal.BU-8NF6N.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.C9ByxPoS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.C4YAOKlc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGooglePaySdk.OrY8lkjd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLoginLoader.C9inTzsG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/publishMessage.CPsQvyYu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.DJl2ZAL4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/context.WjMzC5I2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.0gyWa648.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact.Bz1Su2kO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.CmRC2-61.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.BLC7ZA6v.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.ajmBaWCC.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.DhZZMK7-.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/OnePage.BL1uXB7_.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DNerkzQV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.Bk8Je7sI.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.sQehCocD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLoginLoader.CjGSo8kt.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.CtZGmwZL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useAmazonContact.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.CAxiAssW.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  