var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4853fc4d-86fc-4fce-9a40-335e6bd66d9e","b4312faf-c9cc-4cba-9bcd-a27775e5291f","dbc8c755-19c9-46c3-bb8e-06fd9a152833","7483b4f7-7fb4-4688-baf8-35905e2750a3","1ce918c8-39b0-4513-851c-29fec04107e9","b1441668-0ed8-4541-afe0-1f66b4104d02","9678553f-aad4-4460-b6ee-a31dcced0430","2493be04-0fe7-4bdb-a197-24159154b0c2","b92d5dba-50fa-495f-b55c-418e0f967d23","d20e72ba-1f39-47b5-9667-ca11b4940951","31a17ff8-3105-4a8e-89b3-e16cfbb7f3b5","69d42c5a-64dd-4bee-9086-661b969dc1d4","84421612-3c61-495a-a033-4fd7c8d0e956","f173eb87-c694-45a6-80da-4af601719f25","606a095c-9963-456a-bc1e-5c9320912e10","673b0b9d-a849-4849-bffe-85d4687f4bc7","c3f3152b-b68f-454b-9d59-e073038c0679","0b342b6f-023d-49eb-87b7-83d41bad4150","276c9776-29a4-4b2d-96a4-de8e23f62e40","93621c68-efaf-4b3f-aa3d-8e6a8627ca3b","844abc0f-9218-4b10-a0d3-92a8a0e0f3db","94f6e460-7bad-4fe6-9f57-069068ec4280","fcfb8a25-e05c-43a6-a6d5-2a7027e956a2","9e122e92-fec4-4b55-8114-0433400fd9e9","2dcd4399-3478-4e2b-a6ad-2ccb10f99ee9","f652c12b-1e6d-4066-b7d0-2c47ed2ed329","937fc3cb-4856-4b0f-a286-41139c198840","4fad6f4b-2c57-42c9-89cc-989e21c0b639","5f2a9cab-a9ab-4b65-8e91-4d8bf6e7b487","72c51d0c-82b2-4110-ab2f-92b10e3cf307","f11bf77e-fe18-494e-9782-02cda07019a6","54d6b2cc-1905-448c-bfa7-74e693abb50c","e8fb27a3-d734-408e-bc5c-12fa47cb0674","b615e0a5-ce4e-4720-bfa8-46c444ae922d","43b649cc-a3d0-4e35-9b0e-184ad1d74eb9","f61ca84d-ae9f-4ffa-a3ff-2de8b2f4fab3","70a12b0c-9536-43c2-a5e7-3e2b4c350f5e","73b2acc2-a9a0-4a1c-93df-a9dc0a849515","eb21efb2-04d2-4cfe-86ba-aad93d451dda","2185b95e-b1a1-4cc8-be5b-c4233be3c062","aec91341-03c3-4c64-b973-cc38fb9dbb39","5e22b353-8d21-402d-bed7-fd1c769cf886","2a58c48a-7d66-4c29-905c-1d38b2db40db","899132c0-14b5-4604-9f28-aedde6b23453","0c71e78f-790a-4bea-a90c-9674e2ea78a5","eeb14a25-2eac-4705-90ec-69bc0ba96695","66d4011f-e12f-499c-8a80-aac3a22ca1c4","93257210-b528-4fc5-a8df-038ec164525f","637f8a07-531d-44ab-88d2-2ba3c87acf22","e851693b-22e9-41dd-87bc-7d4f3c05f0e1","6ac79794-44d4-4cec-81a5-9e031b75a715","a9a256a8-0cd9-4433-ae0a-cea349ce4e64","fa748379-e6ff-4ae1-a075-a1dc1e3ee37f","766ffa0e-2e0d-4dcd-88e7-b4768e68a692","7c2e8300-e85e-4fbd-b7ea-e6a8ea7eb562","f9c21723-4426-4c78-8aa1-623adc6d87e5","f27f35cc-dd08-41ce-b525-2a6911ce621e","8145e5d3-170d-43d9-95a9-bf5b2c20ada4","92c89e96-e1e0-49e7-8d3e-04635a4a9e5b","d5cb465f-c59e-4819-ae9f-bc9f9df023c5","7aeffee0-f65e-48f1-abce-1f6c818a9e09","39479510-7fc0-4245-b955-c748ddfc9ee4","ebf666aa-1154-4e6d-aa50-40acb81b2185","be2c8920-33c0-4d9e-bf0f-2fb98822aa8f","5c5c745d-383e-4248-8af4-96d420ee6f37","cb804abb-c206-433a-b226-9324f7ff1f08","a57a320e-b10c-498c-ab28-53c233706e5c","aa3b5df0-c484-4a5f-89a5-f4dd496743a5","6c796e89-f724-477b-92bf-f2cb71b6f158","e7be3260-66eb-4c1b-8a1d-c7ffdcfd6884","88b9680b-e2e0-45f2-bd4f-4f64523cb715","b5443bf3-a79e-43f6-82a9-d6fde6c691b0","93c01956-4727-41c1-8e3c-8c84a3bbc9c5","cb52e5c5-cc7a-47af-a493-7acb5e399384","a6c947eb-5a2f-4671-a364-b05202feb4a4","b675fb3f-35e1-4f5e-aa7b-477e533fd0ba","b251661c-3be5-4e19-94b1-125414ab3ab4","2c3ae429-e5cd-4a02-ac66-011fa044b270","19b73cda-f105-4504-bd7a-c31bbb2a6f3b","6e995bcb-d71e-45f8-9f5f-eafc131d4cbb","c5e20533-9b4e-4e7d-9123-1877369eea23","af0a37db-dd69-48fb-8d67-2a95ef4938ec","fd55c1ad-6c8f-4386-afc7-8205438150c8"],"propsByKey":{"4853fc4d-86fc-4fce-9a40-335e6bd66d9e":{"name":"vic","sourceUrl":null,"frameSize":{"x":350,"y":155},"frameCount":2,"looping":true,"frameDelay":30,"version":"Wi_Yn2ciCRar5kUIYI_gpLrW2XNtdiTM","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":310},"rootRelativePath":"assets/4853fc4d-86fc-4fce-9a40-335e6bd66d9e.png"},"b4312faf-c9cc-4cba-9bcd-a27775e5291f":{"name":"alien","sourceUrl":null,"frameSize":{"x":16,"y":17},"frameCount":2,"looping":true,"frameDelay":12,"version":"k_j6wbMwbV_NZsvh_rZ3KOKnh_J6LLVF","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":34},"rootRelativePath":"assets/b4312faf-c9cc-4cba-9bcd-a27775e5291f.png"},"dbc8c755-19c9-46c3-bb8e-06fd9a152833":{"name":"alr","sourceUrl":null,"frameSize":{"x":16,"y":17},"frameCount":2,"looping":true,"frameDelay":12,"version":"MWVoYhXI2yF0aBBxdemBKcW7JbP.YtgR","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":34},"rootRelativePath":"assets/dbc8c755-19c9-46c3-bb8e-06fd9a152833.png"},"7483b4f7-7fb4-4688-baf8-35905e2750a3":{"name":"bossbull","sourceUrl":null,"frameSize":{"x":18,"y":9},"frameCount":2,"looping":true,"frameDelay":12,"version":"zPhfIoEHi.d27vWRJNoTnUPtqMsCdKvs","loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":18},"rootRelativePath":"assets/7483b4f7-7fb4-4688-baf8-35905e2750a3.png"},"1ce918c8-39b0-4513-851c-29fec04107e9":{"name":"boss","sourceUrl":null,"frameSize":{"x":180,"y":191},"frameCount":2,"looping":true,"frameDelay":12,"version":"643EJL40.5U07VFM7bUkjYe0LULAhWG6","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":382},"rootRelativePath":"assets/1ce918c8-39b0-4513-851c-29fec04107e9.png"},"b1441668-0ed8-4541-afe0-1f66b4104d02":{"name":"bossr","sourceUrl":null,"frameSize":{"x":180,"y":191},"frameCount":2,"looping":true,"frameDelay":12,"version":"9EJd.ccqHuNQMwq9Nd7zEVYpsZCV3CmL","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":382},"rootRelativePath":"assets/b1441668-0ed8-4541-afe0-1f66b4104d02.png"},"9678553f-aad4-4460-b6ee-a31dcced0430":{"name":"open","sourceUrl":null,"frameSize":{"x":180,"y":191},"frameCount":1,"looping":true,"frameDelay":12,"version":"U2zx6idcWHrFLKxgLb_Ex1vIJWE4E87d","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":191},"rootRelativePath":"assets/9678553f-aad4-4460-b6ee-a31dcced0430.png"},"2493be04-0fe7-4bdb-a197-24159154b0c2":{"name":"open2","sourceUrl":null,"frameSize":{"x":180,"y":191},"frameCount":2,"looping":true,"frameDelay":12,"version":"UdkASeteedIqWNe9Dx6gWFXR9l8uI21v","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":382},"rootRelativePath":"assets/2493be04-0fe7-4bdb-a197-24159154b0c2.png"},"b92d5dba-50fa-495f-b55c-418e0f967d23":{"name":"open1","sourceUrl":null,"frameSize":{"x":180,"y":191},"frameCount":1,"looping":true,"frameDelay":12,"version":"p64jKarkg.5yBgQ8ikxr7liMwDqi2wO2","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":191},"rootRelativePath":"assets/b92d5dba-50fa-495f-b55c-418e0f967d23.png"},"d20e72ba-1f39-47b5-9667-ca11b4940951":{"name":"bigboi","sourceUrl":null,"frameSize":{"x":169,"y":158},"frameCount":2,"looping":true,"frameDelay":12,"version":"ZVhH9TDjaodZQXbNNoRb.Nm0def_SPY6","loadedFromSource":true,"saved":true,"sourceSize":{"x":169,"y":316},"rootRelativePath":"assets/d20e72ba-1f39-47b5-9667-ca11b4940951.png"},"31a17ff8-3105-4a8e-89b3-e16cfbb7f3b5":{"name":"bosshealth","sourceUrl":null,"frameSize":{"x":100,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"B_Q1EY__RxEV8ttV2fQHVpjcOkmJppBz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":30},"rootRelativePath":"assets/31a17ff8-3105-4a8e-89b3-e16cfbb7f3b5.png"},"69d42c5a-64dd-4bee-9086-661b969dc1d4":{"name":"bosshealthfill","sourceUrl":null,"frameSize":{"x":100,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"dc6LnvswwN.CkS4Wz.4V9om_ljPVqHlt","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":30},"rootRelativePath":"assets/69d42c5a-64dd-4bee-9086-661b969dc1d4.png"},"84421612-3c61-495a-a033-4fd7c8d0e956":{"name":"space","sourceUrl":"assets/api/v1/animation-library/8O2IYyEUlJ8FNRemqZEf0FXfKmbUIxiF/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":20,"version":"8O2IYyEUlJ8FNRemqZEf0FXfKmbUIxiF","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/8O2IYyEUlJ8FNRemqZEf0FXfKmbUIxiF/category_backgrounds/background_space.png"},"f173eb87-c694-45a6-80da-4af601719f25":{"name":"enes","sourceUrl":null,"frameSize":{"x":200,"y":181},"frameCount":2,"looping":true,"frameDelay":3,"version":"kEDMM9zEHDQnRcMUHFC2cqMrqJFFmXqb","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":362},"rootRelativePath":"assets/f173eb87-c694-45a6-80da-4af601719f25.png"},"606a095c-9963-456a-bc1e-5c9320912e10":{"name":"home","sourceUrl":null,"frameSize":{"x":200,"y":204},"frameCount":2,"looping":true,"frameDelay":3,"version":"HAqND6pGfh5OB30t48A.AFYTliWjncu2","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":408},"rootRelativePath":"assets/606a095c-9963-456a-bc1e-5c9320912e10.png"},"673b0b9d-a849-4849-bffe-85d4687f4bc7":{"name":"bull","sourceUrl":null,"frameSize":{"x":13,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"NKiPbHdEV8I954DTdwiKkhMu4LlZYg.u","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":4},"rootRelativePath":"assets/673b0b9d-a849-4849-bffe-85d4687f4bc7.png"},"c3f3152b-b68f-454b-9d59-e073038c0679":{"name":"hero1","sourceUrl":null,"frameSize":{"x":94,"y":138},"frameCount":2,"looping":true,"frameDelay":4,"version":"2.Tn0uS1_op.n8BKtUsa2SKQAX9GlxD7","loadedFromSource":true,"saved":true,"sourceSize":{"x":188,"y":138},"rootRelativePath":"assets/c3f3152b-b68f-454b-9d59-e073038c0679.png"},"0b342b6f-023d-49eb-87b7-83d41bad4150":{"name":"hero1s","sourceUrl":null,"frameSize":{"x":94,"y":138},"frameCount":5,"looping":true,"frameDelay":12,"version":"C1qV9ROKH.a7E9h33DjgYxvGgFA81yLW","loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":276},"rootRelativePath":"assets/0b342b6f-023d-49eb-87b7-83d41bad4150.png"},"276c9776-29a4-4b2d-96a4-de8e23f62e40":{"name":"frame","sourceUrl":null,"frameSize":{"x":106,"y":151},"frameCount":3,"looping":true,"frameDelay":20,"version":"ElD1txDlj1YJC_2VqDb8tx_jbM3JM6kp","loadedFromSource":true,"saved":true,"sourceSize":{"x":212,"y":302},"rootRelativePath":"assets/276c9776-29a4-4b2d-96a4-de8e23f62e40.png"},"93621c68-efaf-4b3f-aa3d-8e6a8627ca3b":{"name":"not","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"844abc0f-9218-4b10-a0d3-92a8a0e0f3db":{"name":"arc","sourceUrl":null,"frameSize":{"x":300,"y":302},"frameCount":2,"looping":true,"frameDelay":12,"version":"BmnOBGlt3.sEXpGrYBQvStNxNuwyPCfx","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":604},"rootRelativePath":"assets/844abc0f-9218-4b10-a0d3-92a8a0e0f3db.png"},"94f6e460-7bad-4fe6-9f57-069068ec4280":{"name":"core","sourceUrl":null,"frameSize":{"x":207,"y":243},"frameCount":2,"looping":true,"frameDelay":12,"version":"_liLQ64pteW0Aq1sLfWh.TmQ4j7z65SM","loadedFromSource":true,"saved":true,"sourceSize":{"x":414,"y":243},"rootRelativePath":"assets/94f6e460-7bad-4fe6-9f57-069068ec4280.png"},"fcfb8a25-e05c-43a6-a6d5-2a7027e956a2":{"name":"lab","sourceUrl":null,"frameSize":{"x":406,"y":321},"frameCount":1,"looping":true,"frameDelay":12,"version":"yhzHTemKfVSid_ZAJrInlcw5t3C3V1B2","loadedFromSource":true,"saved":true,"sourceSize":{"x":406,"y":321},"rootRelativePath":"assets/fcfb8a25-e05c-43a6-a6d5-2a7027e956a2.png"},"9e122e92-fec4-4b55-8114-0433400fd9e9":{"name":"barrier","sourceUrl":null,"frameSize":{"x":100,"y":1},"frameCount":1,"looping":true,"frameDelay":12,"version":"SR_bztIVoxC.7bZ3drOgwld0ty3pX3bl","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":1},"rootRelativePath":"assets/9e122e92-fec4-4b55-8114-0433400fd9e9.png"},"2dcd4399-3478-4e2b-a6ad-2ccb10f99ee9":{"name":"bop","sourceUrl":null,"frameSize":{"x":19,"y":19},"frameCount":4,"looping":true,"frameDelay":12,"version":"BpNtZNiszym9h1Xp1Ifj0KDvnjW67NPL","loadedFromSource":true,"saved":true,"sourceSize":{"x":38,"y":38},"rootRelativePath":"assets/2dcd4399-3478-4e2b-a6ad-2ccb10f99ee9.png"},"f652c12b-1e6d-4066-b7d0-2c47ed2ed329":{"name":"bo","sourceUrl":null,"frameSize":{"x":436,"y":486},"frameCount":1,"looping":true,"frameDelay":12,"version":"CJ0uV7PftvBCT6HlwU89kpJ.D_zRNZeo","loadedFromSource":true,"saved":true,"sourceSize":{"x":436,"y":486},"rootRelativePath":"assets/f652c12b-1e6d-4066-b7d0-2c47ed2ed329.png"},"937fc3cb-4856-4b0f-a286-41139c198840":{"name":"a","sourceUrl":null,"frameSize":{"x":433,"y":424},"frameCount":1,"looping":true,"frameDelay":12,"version":"MJBu334bOJN9xTra4vEOqCoT6nKewJsQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":433,"y":424},"rootRelativePath":"assets/937fc3cb-4856-4b0f-a286-41139c198840.png"},"4fad6f4b-2c57-42c9-89cc-989e21c0b639":{"name":"b","sourceUrl":null,"frameSize":{"x":433,"y":424},"frameCount":1,"looping":true,"frameDelay":12,"version":".uhdDAJQ5JMeH5_CYSNvq2d9ljj6Hj_G","loadedFromSource":true,"saved":true,"sourceSize":{"x":433,"y":424},"rootRelativePath":"assets/4fad6f4b-2c57-42c9-89cc-989e21c0b639.png"},"5f2a9cab-a9ab-4b65-8e91-4d8bf6e7b487":{"name":"ao","sourceUrl":"assets/5f2a9cab-a9ab-4b65-8e91-4d8bf6e7b487.png","frameSize":{"x":452,"y":500},"frameCount":1,"looping":true,"frameDelay":4,"version":"V2_DEiArySCZv8oYaHellCi5swDGshdy","loadedFromSource":true,"saved":true,"sourceSize":{"x":452,"y":500},"rootRelativePath":"assets/5f2a9cab-a9ab-4b65-8e91-4d8bf6e7b487.png"},"72c51d0c-82b2-4110-ab2f-92b10e3cf307":{"name":"c","sourceUrl":null,"frameSize":{"x":762,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"5G_h1jBVO3chRkWlXI1oGxc87uFzSWcz","loadedFromSource":true,"saved":true,"sourceSize":{"x":762,"y":268},"rootRelativePath":"assets/72c51d0c-82b2-4110-ab2f-92b10e3cf307.png"},"f11bf77e-fe18-494e-9782-02cda07019a6":{"name":"i","sourceUrl":null,"frameSize":{"x":762,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"aHHbaoi_MlsrnBmPtecTjEMNyTzejkn0","loadedFromSource":true,"saved":true,"sourceSize":{"x":762,"y":268},"rootRelativePath":"assets/f11bf77e-fe18-494e-9782-02cda07019a6.png"},"54d6b2cc-1905-448c-bfa7-74e693abb50c":{"name":"block","sourceUrl":null,"frameSize":{"x":95,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"pdz9xGrpn6sMzVR.cf16ZrrShnaQhylF","loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":94},"rootRelativePath":"assets/54d6b2cc-1905-448c-bfa7-74e693abb50c.png"},"e8fb27a3-d734-408e-bc5c-12fa47cb0674":{"name":"blocka","sourceUrl":null,"frameSize":{"x":95,"y":94},"frameCount":16,"looping":true,"frameDelay":5,"version":"lmhxx_K.4MJJy3oTbqSjZBGuG3m6f0qN","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":376},"rootRelativePath":"assets/e8fb27a3-d734-408e-bc5c-12fa47cb0674.png"},"b615e0a5-ce4e-4720-bfa8-46c444ae922d":{"name":"<3","sourceUrl":"assets/b615e0a5-ce4e-4720-bfa8-46c444ae922d.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZTGFycWYcBOdz9zDF5OdL3kkg413wf9G","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/b615e0a5-ce4e-4720-bfa8-46c444ae922d.png"},"43b649cc-a3d0-4e35-9b0e-184ad1d74eb9":{"name":"<3em","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"iU_9cMp.n0M.YLPI4Sx33xr.C4KRTZ4J","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/43b649cc-a3d0-4e35-9b0e-184ad1d74eb9.png"},"f61ca84d-ae9f-4ffa-a3ff-2de8b2f4fab3":{"name":"<3emw","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":".9uHaAgY_4oN2.pNMYNBvStT37J8rqsJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/f61ca84d-ae9f-4ffa-a3ff-2de8b2f4fab3.png"},"70a12b0c-9536-43c2-a5e7-3e2b4c350f5e":{"name":"<3w","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"so9zPf28S.Ql5NETtK_IwN.OyNuqToGa","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/70a12b0c-9536-43c2-a5e7-3e2b4c350f5e.png"},"73b2acc2-a9a0-4a1c-93df-a9dc0a849515":{"name":"heartcon","sourceUrl":"assets/73b2acc2-a9a0-4a1c-93df-a9dc0a849515.png","frameSize":{"x":448,"y":447},"frameCount":1,"looping":true,"frameDelay":4,"version":"de266tJhq25fWIyGXW.uk0DAj6eWVEv9","loadedFromSource":true,"saved":true,"sourceSize":{"x":448,"y":447},"rootRelativePath":"assets/73b2acc2-a9a0-4a1c-93df-a9dc0a849515.png"},"eb21efb2-04d2-4cfe-86ba-aad93d451dda":{"name":"pcon","sourceUrl":"assets/eb21efb2-04d2-4cfe-86ba-aad93d451dda.png","frameSize":{"x":447,"y":448},"frameCount":1,"looping":true,"frameDelay":4,"version":"Q6zIojpuZpa3u2hiCTsp5vDYMhfU3dI3","loadedFromSource":true,"saved":true,"sourceSize":{"x":447,"y":448},"rootRelativePath":"assets/eb21efb2-04d2-4cfe-86ba-aad93d451dda.png"},"2185b95e-b1a1-4cc8-be5b-c4233be3c062":{"name":"increasecon","sourceUrl":"assets/2185b95e-b1a1-4cc8-be5b-c4233be3c062.png","frameSize":{"x":448,"y":448},"frameCount":1,"looping":true,"frameDelay":4,"version":"xiWP5_wE8MvJVtFAnq8.3thOUM6oppBY","loadedFromSource":true,"saved":true,"sourceSize":{"x":448,"y":448},"rootRelativePath":"assets/2185b95e-b1a1-4cc8-be5b-c4233be3c062.png"},"aec91341-03c3-4c64-b973-cc38fb9dbb39":{"name":"ammocon","sourceUrl":"assets/aec91341-03c3-4c64-b973-cc38fb9dbb39.png","frameSize":{"x":447,"y":447},"frameCount":1,"looping":true,"frameDelay":4,"version":"vNaphXhdsbtKfV_5Ze1y6_mym3sXWJog","loadedFromSource":true,"saved":true,"sourceSize":{"x":447,"y":447},"rootRelativePath":"assets/aec91341-03c3-4c64-b973-cc38fb9dbb39.png"},"5e22b353-8d21-402d-bed7-fd1c769cf886":{"name":"trollcon","sourceUrl":null,"frameSize":{"x":448,"y":447},"frameCount":1,"looping":true,"frameDelay":12,"version":"QLIDCwsiBSWedaeuWRKNX0KzXoxJJw2g","loadedFromSource":true,"saved":true,"sourceSize":{"x":448,"y":447},"rootRelativePath":"assets/5e22b353-8d21-402d-bed7-fd1c769cf886.png"},"2a58c48a-7d66-4c29-905c-1d38b2db40db":{"name":"x2con","sourceUrl":"assets/2a58c48a-7d66-4c29-905c-1d38b2db40db.png","frameSize":{"x":448,"y":447},"frameCount":1,"looping":true,"frameDelay":4,"version":"2prsRqqYjBW9TPdFWGubckEdD8Lm6bTg","loadedFromSource":true,"saved":true,"sourceSize":{"x":448,"y":447},"rootRelativePath":"assets/2a58c48a-7d66-4c29-905c-1d38b2db40db.png"},"899132c0-14b5-4604-9f28-aedde6b23453":{"name":"bullet2","sourceUrl":null,"frameSize":{"x":13,"y":34},"frameCount":1,"looping":true,"frameDelay":12,"version":"msNJJhRAhhGkJQPyou0B5rKbzRtWmYxU","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":34},"rootRelativePath":"assets/899132c0-14b5-4604-9f28-aedde6b23453.png"},"0c71e78f-790a-4bea-a90c-9674e2ea78a5":{"name":"bubble1","sourceUrl":"assets/0c71e78f-790a-4bea-a90c-9674e2ea78a5.png","frameSize":{"x":736,"y":505},"frameCount":1,"looping":true,"frameDelay":4,"version":"xeW6nGCZQUJuXjWSaV_5PpQfkdmyK0gD","loadedFromSource":true,"saved":true,"sourceSize":{"x":736,"y":505},"rootRelativePath":"assets/0c71e78f-790a-4bea-a90c-9674e2ea78a5.png"},"eeb14a25-2eac-4705-90ec-69bc0ba96695":{"name":"timerpower","sourceUrl":null,"frameSize":{"x":75,"y":73},"frameCount":22,"looping":true,"frameDelay":30,"version":"wNCD5eM3Mp53fETd5tTPPScNRyHlknTG","loadedFromSource":true,"saved":true,"sourceSize":{"x":375,"y":365},"rootRelativePath":"assets/eeb14a25-2eac-4705-90ec-69bc0ba96695.png"},"66d4011f-e12f-499c-8a80-aac3a22ca1c4":{"name":"ready","sourceUrl":null,"frameSize":{"x":328,"y":78},"frameCount":5,"looping":true,"frameDelay":20,"version":"F3U_e0l12D4mtdJN43K0SjQ4AA8c3wZN","loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":390},"rootRelativePath":"assets/66d4011f-e12f-499c-8a80-aac3a22ca1c4.png"},"93257210-b528-4fc5-a8df-038ec164525f":{"name":"scorepng","sourceUrl":null,"frameSize":{"x":316,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"Sv7rEaZBSSTDPVXfa2pz0DS9vZtu6ouT","loadedFromSource":true,"saved":true,"sourceSize":{"x":316,"y":72},"rootRelativePath":"assets/93257210-b528-4fc5-a8df-038ec164525f.png"},"637f8a07-531d-44ab-88d2-2ba3c87acf22":{"name":"ammopng","sourceUrl":null,"frameSize":{"x":278,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"R9fj4arRVbXBzT1ogHj76U1UFDc1t1DP","loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":72},"rootRelativePath":"assets/637f8a07-531d-44ab-88d2-2ba3c87acf22.png"},"e851693b-22e9-41dd-87bc-7d4f3c05f0e1":{"name":"sss","sourceUrl":"assets/e851693b-22e9-41dd-87bc-7d4f3c05f0e1.png","frameSize":{"x":200,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZxXb_lyXacMgP5zYdJhklfHJB495L6Ir","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":43},"rootRelativePath":"assets/e851693b-22e9-41dd-87bc-7d4f3c05f0e1.png"},"6ac79794-44d4-4cec-81a5-9e031b75a715":{"name":"end","sourceUrl":null,"frameSize":{"x":6000,"y":6000},"frameCount":1,"looping":true,"frameDelay":12,"version":"cXWS6uAgBb.aLPv5g5g3MW8kOX3Sqkw0","loadedFromSource":true,"saved":true,"sourceSize":{"x":6000,"y":6000},"rootRelativePath":"assets/6ac79794-44d4-4cec-81a5-9e031b75a715.png"},"a9a256a8-0cd9-4433-ae0a-cea349ce4e64":{"name":"sanic","sourceUrl":null,"frameSize":{"x":150,"y":162},"frameCount":16,"looping":true,"frameDelay":4,"version":"pOe55YktrjYuA.iqabOZHco5lSOU39i_","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":648},"rootRelativePath":"assets/a9a256a8-0cd9-4433-ae0a-cea349ce4e64.png"},"fa748379-e6ff-4ae1-a075-a1dc1e3ee37f":{"name":"hero2s","sourceUrl":null,"frameSize":{"x":138,"y":129},"frameCount":2,"looping":true,"frameDelay":12,"version":"eBk6gyv2xIF9m4FAIYIPCVfYAsH8COtk","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":258},"rootRelativePath":"assets/fa748379-e6ff-4ae1-a075-a1dc1e3ee37f.png"},"766ffa0e-2e0d-4dcd-88e7-b4768e68a692":{"name":"hero2","sourceUrl":null,"frameSize":{"x":138,"y":129},"frameCount":2,"looping":true,"frameDelay":4,"version":"2ZNOPKpVIloBTiSTs2EaHer8Efm_YT.B","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":258},"rootRelativePath":"assets/766ffa0e-2e0d-4dcd-88e7-b4768e68a692.png"},"7c2e8300-e85e-4fbd-b7ea-e6a8ea7eb562":{"name":"sa1","sourceUrl":null,"frameSize":{"x":889,"y":95},"frameCount":6,"looping":true,"frameDelay":20,"version":"TM4MaNIh7LkyBlPYbQ3jcZ9KHloD3BRA","loadedFromSource":true,"saved":true,"sourceSize":{"x":889,"y":570},"rootRelativePath":"assets/7c2e8300-e85e-4fbd-b7ea-e6a8ea7eb562.png"},"f9c21723-4426-4c78-8aa1-623adc6d87e5":{"name":"sa","sourceUrl":null,"frameSize":{"x":889,"y":95},"frameCount":1,"looping":true,"frameDelay":12,"version":"5K54iksj_1CwoNzvu4YAECaMPQOAmV.z","loadedFromSource":true,"saved":true,"sourceSize":{"x":889,"y":95},"rootRelativePath":"assets/f9c21723-4426-4c78-8aa1-623adc6d87e5.png"},"f27f35cc-dd08-41ce-b525-2a6911ce621e":{"name":"sts","sourceUrl":null,"frameSize":{"x":740,"y":340},"frameCount":3,"looping":true,"frameDelay":20,"version":"haFp1LI2bW7k3hfaigNR8MvvppH57fDo","loadedFromSource":true,"saved":true,"sourceSize":{"x":740,"y":1020},"rootRelativePath":"assets/f27f35cc-dd08-41ce-b525-2a6911ce621e.png"},"8145e5d3-170d-43d9-95a9-bf5b2c20ada4":{"name":"ctrl","sourceUrl":"assets/8145e5d3-170d-43d9-95a9-bf5b2c20ada4.png","frameSize":{"x":1844,"y":96},"frameCount":1,"looping":true,"frameDelay":4,"version":"92hPsGGr.Kx5xRVwQJ2_RBbBHAZsWajf","loadedFromSource":true,"saved":true,"sourceSize":{"x":1844,"y":96},"rootRelativePath":"assets/8145e5d3-170d-43d9-95a9-bf5b2c20ada4.png"},"92c89e96-e1e0-49e7-8d3e-04635a4a9e5b":{"name":"exit","sourceUrl":"assets/92c89e96-e1e0-49e7-8d3e-04635a4a9e5b.png","frameSize":{"x":1255,"y":96},"frameCount":1,"looping":true,"frameDelay":4,"version":"p8ZSX31fAr8yzKioMCPPvlVpdWB6eBl5","loadedFromSource":true,"saved":true,"sourceSize":{"x":1255,"y":96},"rootRelativePath":"assets/92c89e96-e1e0-49e7-8d3e-04635a4a9e5b.png"},"d5cb465f-c59e-4819-ae9f-bc9f9df023c5":{"name":"pic","sourceUrl":"assets/d5cb465f-c59e-4819-ae9f-bc9f9df023c5.png","frameSize":{"x":698,"y":96},"frameCount":1,"looping":true,"frameDelay":4,"version":"xG7hZ.4coAimP4ZEslTykEcaJUPone4y","loadedFromSource":true,"saved":true,"sourceSize":{"x":698,"y":96},"rootRelativePath":"assets/d5cb465f-c59e-4819-ae9f-bc9f9df023c5.png"},"7aeffee0-f65e-48f1-abce-1f6c818a9e09":{"name":"inst","sourceUrl":null,"frameSize":{"x":375,"y":362},"frameCount":1,"looping":true,"frameDelay":12,"version":"8Gubd47M0suhzfLSs.50NDVnigxT8O.V","loadedFromSource":true,"saved":true,"sourceSize":{"x":375,"y":362},"rootRelativePath":"assets/7aeffee0-f65e-48f1-abce-1f6c818a9e09.png"},"39479510-7fc0-4245-b955-c748ddfc9ee4":{"name":"stc","sourceUrl":null,"frameSize":{"x":1087,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"Fuw0dw53e4PJTWBRvW923atnbctfuid.","loadedFromSource":true,"saved":true,"sourceSize":{"x":1087,"y":96},"rootRelativePath":"assets/39479510-7fc0-4245-b955-c748ddfc9ee4.png"},"ebf666aa-1154-4e6d-aa50-40acb81b2185":{"name":"right","sourceUrl":null,"frameSize":{"x":131,"y":139},"frameCount":1,"looping":true,"frameDelay":12,"version":"4c9e_W6_sPxX4zR.432e57ZsJ6RBMrBM","loadedFromSource":true,"saved":true,"sourceSize":{"x":131,"y":139},"rootRelativePath":"assets/ebf666aa-1154-4e6d-aa50-40acb81b2185.png"},"be2c8920-33c0-4d9e-bf0f-2fb98822aa8f":{"name":"left","sourceUrl":null,"frameSize":{"x":130,"y":139},"frameCount":2,"looping":true,"frameDelay":12,"version":"PEQmWbe0INM8NbtHcB3hIatJeVB5g_CZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":278},"rootRelativePath":"assets/be2c8920-33c0-4d9e-bf0f-2fb98822aa8f.png"},"5c5c745d-383e-4248-8af4-96d420ee6f37":{"name":"s1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"yIQYcZSvsRda4FNQ3IisNGHHhQQpsMz5","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/5c5c745d-383e-4248-8af4-96d420ee6f37.png"},"cb804abb-c206-433a-b226-9324f7ff1f08":{"name":"s2","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"FX7pwcWOZ7vneM4QFROeT9NVdApV2H0d","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/cb804abb-c206-433a-b226-9324f7ff1f08.png"},"a57a320e-b10c-498c-ab28-53c233706e5c":{"name":"s3","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"GJUxYV4EuZ3_P8.3rT2fcNYk9Ww5jSZH","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/a57a320e-b10c-498c-ab28-53c233706e5c.png"},"aa3b5df0-c484-4a5f-89a5-f4dd496743a5":{"name":"s4","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Vbu0sg1WnfOxXgORT1FXTp0KdZbs9IgN","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/aa3b5df0-c484-4a5f-89a5-f4dd496743a5.png"},"6c796e89-f724-477b-92bf-f2cb71b6f158":{"name":"s5","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"SkQvVfyMvMfHG7pYsByeIKtXnpmpf2ss","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/6c796e89-f724-477b-92bf-f2cb71b6f158.png"},"e7be3260-66eb-4c1b-8a1d-c7ffdcfd6884":{"name":"s7","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"wTVFGf3eiTGUunrnp1YZixyaseRA3BR9","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/e7be3260-66eb-4c1b-8a1d-c7ffdcfd6884.png"},"88b9680b-e2e0-45f2-bd4f-4f64523cb715":{"name":"s8a","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Bbwx22HXU17dw24Vfv4NT8yx.R8lRY6d","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/88b9680b-e2e0-45f2-bd4f-4f64523cb715.png"},"b5443bf3-a79e-43f6-82a9-d6fde6c691b0":{"name":"s6","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"DyXEH9EC7CqPr.GezS8r3Aqm97HdrxSg","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/b5443bf3-a79e-43f6-82a9-d6fde6c691b0.png"},"93c01956-4727-41c1-8e3c-8c84a3bbc9c5":{"name":"s8b","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"0To3MxmmmZoc0wYI9Vcq6fLCOmzCpMqu","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/93c01956-4727-41c1-8e3c-8c84a3bbc9c5.png"},"cb52e5c5-cc7a-47af-a493-7acb5e399384":{"name":"gr","sourceUrl":null,"frameSize":{"x":578,"y":337},"frameCount":2,"looping":true,"frameDelay":30,"version":"8Qrr1w155DKVtaci3ZHWvcDaUpyKjYje","loadedFromSource":true,"saved":true,"sourceSize":{"x":578,"y":674},"rootRelativePath":"assets/cb52e5c5-cc7a-47af-a493-7acb5e399384.png"},"a6c947eb-5a2f-4671-a364-b05202feb4a4":{"name":"take","sourceUrl":null,"frameSize":{"x":400,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"Gmf404pE7ypc5PuYthmUYrNiY.35v73g","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":18},"rootRelativePath":"assets/a6c947eb-5a2f-4671-a364-b05202feb4a4.png"},"b675fb3f-35e1-4f5e-aa7b-477e533fd0ba":{"name":"again","sourceUrl":null,"frameSize":{"x":400,"y":31},"frameCount":1,"looping":true,"frameDelay":12,"version":"_OL.QLr9EdCCtprgG75m9pg4lYJoauba","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":31},"rootRelativePath":"assets/b675fb3f-35e1-4f5e-aa7b-477e533fd0ba.png"},"b251661c-3be5-4e19-94b1-125414ab3ab4":{"name":"main","sourceUrl":null,"frameSize":{"x":400,"y":23},"frameCount":1,"looping":true,"frameDelay":12,"version":"T3Ay76q3OsdLtNEe_F88GYX_Ue1fc3Vq","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":23},"rootRelativePath":"assets/b251661c-3be5-4e19-94b1-125414ab3ab4.png"},"2c3ae429-e5cd-4a02-ac66-011fa044b270":{"name":"horay","sourceUrl":null,"frameSize":{"x":400,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"naSaLBYIXkcBY7iVtJKuYtMwfY73cY2p","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":25},"rootRelativePath":"assets/2c3ae429-e5cd-4a02-ac66-011fa044b270.png"},"19b73cda-f105-4504-bd7a-c31bbb2a6f3b":{"name":"1","sourceUrl":"assets/19b73cda-f105-4504-bd7a-c31bbb2a6f3b.png","frameSize":{"x":120,"y":94},"frameCount":1,"looping":true,"frameDelay":4,"version":"UahaPALXgkQBbGmr58QNGxvw0JMDXNZa","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":94},"rootRelativePath":"assets/19b73cda-f105-4504-bd7a-c31bbb2a6f3b.png"},"6e995bcb-d71e-45f8-9f5f-eafc131d4cbb":{"name":"3","sourceUrl":"assets/6e995bcb-d71e-45f8-9f5f-eafc131d4cbb.png","frameSize":{"x":150,"y":94},"frameCount":1,"looping":true,"frameDelay":4,"version":"Mzb7yt8xtrly94u_xedf1v1fnixyz0nx","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":94},"rootRelativePath":"assets/6e995bcb-d71e-45f8-9f5f-eafc131d4cbb.png"},"c5e20533-9b4e-4e7d-9123-1877369eea23":{"name":"5","sourceUrl":"assets/c5e20533-9b4e-4e7d-9123-1877369eea23.png","frameSize":{"x":150,"y":94},"frameCount":1,"looping":true,"frameDelay":4,"version":"4wUkzMFnuTaLHXSGu9AB6Y0PKx30Q5mE","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":94},"rootRelativePath":"assets/c5e20533-9b4e-4e7d-9123-1877369eea23.png"},"af0a37db-dd69-48fb-8d67-2a95ef4938ec":{"name":"10","sourceUrl":"assets/af0a37db-dd69-48fb-8d67-2a95ef4938ec.png","frameSize":{"x":192,"y":94},"frameCount":1,"looping":true,"frameDelay":4,"version":"jmetqlCdeFnqGOPpC4RbRgfNENqaE4yv","loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":94},"rootRelativePath":"assets/af0a37db-dd69-48fb-8d67-2a95ef4938ec.png"},"fd55c1ad-6c8f-4386-afc7-8205438150c8":{"name":"2","sourceUrl":"assets/fd55c1ad-6c8f-4386-afc7-8205438150c8.png","frameSize":{"x":264,"y":94},"frameCount":1,"looping":true,"frameDelay":4,"version":"9w89QTcY5edJ7Ow8C7AXkDew2MFBZOPW","loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":94},"rootRelativePath":"assets/fd55c1ad-6c8f-4386-afc7-8205438150c8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x5 = 0;
var x6 = 0;
var laby = 0;
var dabble = 1;
var mega = 0;
var hahahehe = 0;
var ride = 0;
var timean = createSprite(0, 0);
var timestart = 0;
var jap = 0;
var sastuff = 0;
var x = 0;
var y = 0;
var adda = randomNumber(500, 10000);
var heros = 0;
World.frameRate = 30;
var gamereset = 0;
var screen = 10;
var win = 0;
var bosslife = 40;
var lives = 3;
var end = 10;
var tf = randomNumber(1, 2);
var math1 = randomNumber(1, end);
var math2 = randomNumber(1, end);
var ans = math1 * math2;
var wans = ans + randomNumber(1, 5) - randomNumber(1,5);
if (ans == wans) {
  wans = wans - randomNumber(1, 5);
}
var bosstime = 100;
var lol69 = 0;
var lol76 = 0;
var rel = 0;
var ddd = 0;
var ammo = 0;
var score = 0;
var score1 = 0;
var realscore = 0;
var gun = 1;
var lucky = 0;
var luckyr = randomNumber(1, 6);
var tf2 = 0;
var use1 = 0;
var use2 = 0;
var use3 = 0;
var use4 = 0;
var use5 = 0;
var use6 = 1;
var use7 = 0;
var use8 = 0;
var trap = 0;
var hap = 0;
var lamb = 0;
var bossa = 0;
var crab = 0;
var map = 0;
var cap = 0;
var test = 0;
var bap = 0;
var yesir = 0;
var dab = 0;
var op1 = 0;
var op2 = 0;
var timey = 0;
var timeall = 0;
var time = 0;
var timeh = 0;
var timer = 0;
var timea = 0;
var time2 = 0;
var time3 = 0;
var timesup = 0;
var ineedsleep = 0;
var timer1 = createSprite(0, 0);
var space = createSprite(200, 200);
space.setAnimation("space");
space.scale = 1;
var a = createSprite(260, 224);
var b = createSprite(260, 380);
a.setAnimation("ao");
b.setAnimation("bo");
a.scale = 0.1;
b.scale = 0.1;
var bar1 = createSprite(200, 175);
var bar2 = createSprite(200, 400);
bar1.setAnimation("barrier");
bar2.setAnimation("barrier");
bar1.visible = false;
bar2.visible = false;
bar2.scale = 4;
bar1.scale = 4;
var bullet = createSprite(-20, -20);
var bullet1 = createSprite(-20, -20);
bullet.setAnimation("bull");
bullet1.setAnimation("bull");
bullet.scale = 2;
bullet1.scale = 2;
bullet.velocityX = -4;
bullet1.velocityX = -4;
var core = createSprite(338, 300);
core.setAnimation("core");
core.scale = 0.5;
var ark = createSprite(340, 297);
ark.setAnimation("arc");
ark.scale = 0.1;
var hero = createSprite(275, 300);
hero.setAnimation("hero1s");
hero.scale = 0.5;
var al = createSprite(-30, randomNumber(200, 350));
var al2 = createSprite(-40, randomNumber(200, 350));
al.setAnimation("alien");
al2.setAnimation("alien");
al.scale = 3;
al2.scale = 3;
var boss = createSprite(-60, 5000);
boss.setAnimation("boss");
boss.scale = .6;
var c = createSprite(200, 130);
var i = createSprite(200, 130);
c.setAnimation("c");
i.setAnimation("i");
c.scale = 0.5;
i.scale = 0.5;
c.visible = false;
i.visible = false;
var block = createSprite(367, 223);
block.setAnimation("block");
block.scale = 0.21;
var h1 = createSprite(300, 375);
var h2 = createSprite(335, 375);
var h3 = createSprite(370, 375);
h1.setAnimation("<3");
h2.setAnimation("<3");
h3.setAnimation("<3");
h1.scale = 0.15;
h2.scale = 0.15;
h3.scale = 0.15;
var bull1 = createSprite(-20000, -200);
var bull2 = createSprite(-20000, -200);
var bull3 = createSprite(-20000, -200);
bull1.velocityX = 1;
bull1.scale = 3;
bull2.velocityX = 1;
bull2.scale = 3;
bull3.velocityX = 1;
bull3.scale = 3;
bull3.setAnimation("bossbull");
bull2.setAnimation("bossbull");
bull1.setAnimation("bossbull");
var turner = createSprite(30, 130);
turner.setAnimation("not");
turner.scale = .5;
var bar = createSprite(50, 380);
var health = createSprite(50, 380);
health.setAnimation("bosshealth");
bar.setAnimation("bosshealthfill");
health.visible = false;
bar.visible = false;
var ready = createSprite(200, 150);
ready.setAnimation("not");
var bubble1 = createSprite(200, 200);
var ammopng = createSprite(350, 20);
var scorepng = createSprite(50, 20);
var bigboi = createSprite(-100000, -100);
bigboi.setAnimation("bigboi");
bigboi.velocityX = 1;
bigboi.scale = .35;
ammopng.scale = .25;
scorepng.scale = .25;
ammopng.setAnimation("ammopng");
scorepng.setAnimation("scorepng");
bubble1.setAnimation("bubble1");
bubble1.scale = 0.3;
bubble1.visible = false;
var defeathim = createSprite(200, 320);
defeathim.setAnimation("sss");
defeathim.visible = false;
var hship = createSprite(-5000, 250);
hship.setAnimation("home");
var eship1 = createSprite(-5200, 230);
eship1.setAnimation("enes");
eship1.scale = .6;
var eship3 = createSprite(-5300, 250);
eship3.setAnimation("enes");
eship3.scale = .6;
var eship2 = createSprite(-5400, 280);
eship2.setAnimation("enes");
eship2.scale = .6;
var sa = createSprite(200, 80);
sa.setAnimation("sa");
sa.scale = .4;
sa.visible = false;
var bosss = createSprite(100, 200);
var als = createSprite(170, 240);
var hero1s = createSprite(320, 190);
als.setAnimation("alien");
bosss.setAnimation("open2");
hero1s.setAnimation("hero1s");
bosss.scale = .8;
als.scale = 3;
var sts = createSprite(200, 325);
sts.setAnimation("sts");
sts.scale = .4;
als.visible = 0;
bosss.visible = 0;
hero1s.visible = 0;
sts.visible = 0;
var ctrl = createSprite(200, 230);
ctrl.setAnimation("ctrl");
ctrl.scale = .2;
ctrl.visible = 0;
var lab = createSprite(200, 200);
lab.setAnimation("lab");
lab.scale = 1.25;
lab.visible = 0;
var inst = createSprite(200, 170);
inst.setAnimation("inst");
inst.visible = 0;
inst.scale = .83;
var exit = createSprite(200, 360);
exit.setAnimation("exit");
exit.visible = 0;
exit.scale = .25;
var pick = createSprite(200, 80);
pick.setAnimation("pic");
pick.scale = .5;
var phero1 = createSprite(90, 200);
var phero2 = createSprite(280, 200);
phero1.setAnimation("hero1s");
phero2.setAnimation("hero2s");
var stc = createSprite(200, 350);
stc.setAnimation("stc");
stc.scale = .25;
var frame = createSprite(-100, -100);
var button1 = createSprite(100, 300);
var button2 = createSprite(300, 300);
button1.setAnimation("left");
button2.setAnimation("right");
frame.setAnimation("frame");
button2.scale = .35;
button1.scale = .35;
pick.visible = 0;
phero1.visible = 0;
phero2.visible = 0;
button1.visible = 0;
button2.visible = 0;
stc.visible = 0;
frame.visible = 0;
var end2 = createSprite(200, 200);
end2.setAnimation("end");
end2.visible = 0;
end2.scale = 2.4;
var bossr = createSprite(200, 200);
var al1r = createSprite(350, 200);
var al2r = createSprite(50, 200);
var arcr = createSprite(190, 130);
var restart = createSprite(200, 350);
var menue = createSprite(200, 360);
var loss = createSprite(200, 50);
var gr = createSprite(200, 200);
bossr.visible = 0;
al1r.visible = 0;
al2r.visible = 0;
arcr.visible = 0;
restart.visible = 0;
menue.visible = 0;
bossr.visible = 0;
bossr.visible = 0;
loss.visible = 0;
gr.visible = 0;
al1r.setAnimation("alr");
al2r.setAnimation("alr");
bossr.setAnimation("bossr");
arcr.setAnimation("arc");
gr.setAnimation("gr");
menue.setAnimation("main");
loss.setAnimation("take");
al1r.scale = 3;
al2r.scale = 3;
gr.scale = .65;
arcr.scale = .1;
bossr.scale = .8;
var horay = createSprite(200, 50);
var heror = createSprite(200, 200);
var sanic1 = createSprite(70, 200);
var sanic2 = createSprite(320, 200);
var vic = createSprite(200, 200);
sanic1.setAnimation("sanic");
sanic2.setAnimation("sanic");
heror.setAnimation("hero1s");
vic.setAnimation("vic");
horay.setAnimation("horay");
vic.scale = 1.2;
sanic1.visible = 0;
sanic2.visible = 0;
heror.visible = 0;
vic.visible = 0;
horay.visible = 0;
var score12 = createSprite(150, 80);
score12.setAnimation("scorepng");
score12.scale = .3;
score12.visible = 0;
var one = createSprite(100, 50);
var three = createSprite(300, 50);
var five = createSprite(300, 50);
var ten = createSprite(300, 50);
var two = createSprite(100, 50);
one.setAnimation("1");
three.setAnimation("3");
five.setAnimation("5");
ten.setAnimation("10");
two.setAnimation("2");
ten.scale = 0;
three.scale = 0;
five.scale = 0;
one.scale = 0;
two.scale = 0;
var s1 = createSprite(200, 200);
var s2 = createSprite(200, 200);
var s3 = createSprite(200, 200);
var s4 = createSprite(200, 200);
var s5 = createSprite(200, 200);
var s6 = createSprite(200, 200);
var s7 = createSprite(200, 200);
var s8a = createSprite(200, 200);
var s8b = createSprite(200, 200);
s1.setAnimation("s1");
s2.setAnimation("s2");
s3.setAnimation("s3");
s4.setAnimation("s4");
s5.setAnimation("s5");
s6.setAnimation("s6");
s7.setAnimation("s7");
s8a.setAnimation("s8a");
s8b.setAnimation("s8b");
s1.visible = 1;
s2.visible = 0;
s3.visible = 0;
s4.visible = 0;
s5.visible = 0;
s6.visible = 0;
s7.visible = 0;
s8a.visible = 0;
s8b.visible = 0;
function draw() {
  if (one.scale < .2) {
    one.visible = false;
  } else {
    one.visible = true;
  }
  if (two.scale < .2) {
    two.visible = false;
  } else {
    two.visible = true;
  }
  if (three.scale < .2) {
    three.visible = false;
  } else {
    three.visible = true;
  }
  if (five.scale < .2) {
    five.visible = false;
  } else {
    five.visible = true;
  }
  if (ten.scale < .2) {
    ten.visible = false;
  } else {
    ten.visible = true;
  }
  if (win == 1) {
    stopSound("assets/rubbbbby.mp3");
    stopSound("assets/mewwwtwoooo.mp3");
    boss.velocityY = 0;
    bull1.velocityX = 0;
    bull2.velocityX = 0;
    bull3.velocityX = 0;
    end2.visible = 1;
    boss.rotation = 270;
    bigboi.velocityX = 0;
    hap = 6;
    if (1 > bosstime) {
      x1 = 1;
      x2 = 1;
      if (keyWentDown("shift")) {
        screen = 0;
        resetall();
        ready.visible = 0;
        stopSound("assets/FORTNITE-DEFAULT-DANCE-BASS-BOOSTED.mp3");
        stopSound("assets/rubbbbby.mp3");
        playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
        x4 = 0;
        ride = 0;
        heros = 0;
        jap = 0;
        laby = 0;
        mega = 0;
        use = 0;
        win = 0;
        lives = 3;
        gamereset = 0;
        end2.scale = 2.4;
        bossr.visible = 0;
        al1r.visible = 0;
        al2r.visible = 0;
        arcr.visible = 0;
        menue.visible = 0;
        bossr.visible = 0;
        loss.visible = 0;
        gr.visible = 0;
        end2.visible = 0;
        sanic1.visible = 0;
        sanic2.visible = 0;
        heror.visible = 0;
        vic.visible = 0;
        horay.visible = 0;
        score12.visible = 0;
        win = 0;
      }
      if (end2.scale > .101) {
        end2.scale = end2.scale - .05;
      } else {
        if (laby == 0) {
          playSound("assets/FORTNITE-DEFAULT-DANCE-BASS-BOOSTED.mp3", false);
          playSound("assets/Title-Screen---Pok-mon-RubySapphireEmerald.mp3", true);
          laby = 1;
        }
        end2.scale = end2.scale - 0;
        x4 = 1;
        menue.visible = 1;
        sanic1.visible = 1;
        sanic2.visible = 1;
        heror.visible = 1;
        vic.visible = 1;
        horay.visible = 1;
        score12.visible = 1;
      }
    } else {
      score1 = score1 + 3;
      playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
      one.scale = .5;
      bosstime = bosstime - 3;
    }
    score1.visible = 1;
  } else {
    boss.rotation = 0;
  }
  if (win == 2) {
    if (keyWentDown("shift")) {
      screen = 0;
      stopSound("assets/lavenderrrrrr.mp3");
      playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3");
      resetall();
      ready.visible = 0;
      x4 = 0;
      ride = 0;
      heros = 0;
      jap = 0;
      laby = 0;
      mega = 0;
      use = 0;
      win = 0;
      lives = 3;
      gamereset = 0;
      end2.scale = 2.4;
      bossr.visible = 0;
      al1r.visible = 0;
      al2r.visible = 0;
      arcr.visible = 0;
      menue.visible = 0;
      bossr.visible = 0;
      loss.visible = 0;
      gr.visible = 0;
      end2.visible = 0;
      score12.visible = 0;
      win = 0;
    }
    boss.velocityY = 0;
    bull1.velocityX = 0;
    bull2.velocityX = 0;
    bull3.velocityX = 0;
    end2.visible = 1;
    boss.rotation = 270;
    bigboi.velocityX = 0;
    hap = 6;
    stopSound("assets/rubbbbby.mp3");
    stopSound("assets/mewwwtwoooo.mp3");
    x1 = 1;
    x2 = 1;
    end2.visible = 1;
    hero.rotation = 90;
    if (end2.scale > .101) {
      end2.scale = end2.scale - .05;
    } else {
      if (laby == 0) {
        playSound("assets/lavenderrrrrr.mp3", false);
        laby = 1;
      }
      end2.scale = end2.scale - 0;
      score12.visible = 1;
      bossr.visible = 1;
      al1r.visible = 1;
      al2r.visible = 1;
      arcr.visible = 1;
      menue.visible = 1;
      loss.visible = 1;
      gr.visible = 1;
      x4 = 1;
    }
  } else {
    hero.rotation = 0;
  }
  if (screen == 0) {
    eship2.visible = 1;
    eship1.visible = 1;
    eship3.visible = 1;
    hship.visible = 1;
    space.setAnimation("space");
  } else {
    hero1s.visible = 0;
    bosss.visible = 0;
    sts.visible = 0;
    sa.visible = 0;
    ctrl.visible = 0;
    als.visible = 0;
    hship.visible = 0;
    eship2.visible = 0;
    eship1.visible = 0;
    eship3.visible = 0;
  }
  if (screen == 0) {
    start();
  }
  if (screen == 1) {
    stopSound("assets/Title-Screen---Pok-mon-RubySapphireEmerald.mp3");
    if (hahahehe == 0) {
      playSound("assets/Pokemon--Blue-and-Red--Viridian-Forest--Music.mp3", true);
      hahahehe = 1;
    }
    if (keyWentDown("shift")) {
      stopSound("assets/Pokemon--Blue-and-Red--Viridian-Forest--Music.mp3");
      playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
      screen = 0;
      ride = 0;
      jap = 0;
      hahahehe = 0;
      mega = 0;
      heros = 0;
      hahahehe = 0;
      inst.visible = 0;
      exit.visible = 0;
      ready.setAnimation("not");
    }
  }
  if (screen == 2) {
    if (keyDown("left")) {
      heros = 1;
      playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
      frame.x = 90;
      frame.y = 200;
    }
    if (keyDown("right")) {
      heros = 2;
      playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
      frame.x = 280;
      frame.y = 200;
    }
    if (keyWentDown("space") && heros != 0) {
      pick.visible = 0;
      phero1.visible = 0;
      phero2.visible = 0;
      button1.visible = 0;
      button2.visible = 0;
      stc.visible = 0;
      frame.x = -200;
      frame.y = -200;
      stopSound("assets/Title-Screen---Pok-mon-RubySapphireEmerald.mp3");
      playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
      screen = 11;
    }
  }
  if (screen == 4) {
    game();
  }
  if (screen == 11) {
    if (heros == 1) {
      s8a.visible = 1;
    } else {
      s8b.visible = 1;
    }
    if (keyWentDown("space")) {
      s8a.visible = 0;
      s8b.visible = 0;
      screen = 4;
    }
  }
  if (screen == 10) {
    if (x6 == 0) {
      playSound("assets/lavenderrrrrr.mp3", true);
      var x6 = 1;
    }
    if (keyWentDown("space")) {
      playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
      dabble = dabble + 1;
    }
    if (dabble == 1) {
      s1.visible = 1;
    }
    if (dabble == 2) {
      s2.visible = 1;
    }
    if (dabble == 3) {
      s3.visible = 1;
    }
    if (dabble == 3) {
      s4.visible = 1;
    }
    if (dabble == 4) {
      s5.visible = 1;
    }
    if (dabble == 5) {
      s6.visible = 1;
    }
    if (dabble == 6) {
      s7.visible = 1;
    }
    if (dabble == 7) {
      s1.visible = 0;
      s2.visible = 0;
      s3.visible = 0;
      s4.visible = 0;
      s5.visible = 0;
      s6.visible = 0;
      s7.visible = 0;
      screen = 0;
      stopSound("assets/lavenderrrrrr.mp3");
    }
    drawSprites();
  }
}
function resetall() {
  bossr.visible = 0;
  al1r.visible = 0;
  al2r.visible = 0;
  arcr.visible = 0;
  restart.visible = 0;
  menue.visible = 0;
  bossr.visible = 0;
  bossr.visible = 0;
  loss.visible = 0;
  gr.visible = 0;
  end2.visible = 0;
  win = 0;
  a.visible = 1;
  b.visible = 1;
  ammopng.visible = 1;
  scorepng.visible = 1;
  ark.visible = 1;
  core.visible = 1;
  h1.visible = 1;
  h2.visible = 1;
  h3.visible = 1;
  block.visible = 1;
  hero.visible = 1;
  bosslife = 40;
  lives = 3;
  end = 10;
  tf = randomNumber(1, 2);
  math1 = randomNumber(1, end);
  math2 = randomNumber(1, end);
  ans = math1 * math2;
  wans = ans + randomNumber(1, 5) - randomNumber(1,5);
  if (ans == wans) {
    wans = wans - randomNumber(1, 5);
  }
  x2 = 0;
  bosstime = 100;
  lol69 = 0;
  lol76 = 0;
  rel = 0;
  ddd = 0;
  ammo = 0;
  score = 0;
  score1 = 0;
  realscore = 0;
  gun = 1;
  lucky = 0;
  luckyr = randomNumber(1, 6);
  tf2 = 0;
  use1 = 0;
  use2 = 0;
  use3 = 0;
  use4 = 0;
  use5 = 0;
  use6 = 1;
  use7 = 0;
  use8 = 0;
  trap = 0;
  hap = 0;
  lamb = 0;
  bossa = 0;
  crab = 0;
  map = 0;
  cap = 0;
  test = 0;
  bap = 0;
  yesir = 0;
  dab = 0;
  op1 = 0;
  op2 = 0;
  timey = 0;
  timeall = 0;
  time = 0;
  timeh = 0;
  timer = 0;
  timea = 0;
  time2 = 0;
  time3 = 0;
  timesup = 0;
  x1 = 0;
  timer1.x = 0;
  timer1.y = 0;
  space.setAnimation("space");
  bar1.setAnimation("barrier");
  bar2.setAnimation("barrier");
  bullet.x = -20;
  bullet.y = -20;
  bullet1.x = -20;
  bullet1.y = -20;
  bullet.setAnimation("bull");
  bullet1.setAnimation("bull");
  space.scale = 1.25;
  hero.x = 275;
  hero.y = 300;
  hero.setAnimation("hero1s");
  hero.scale = 0.5;
  boss.setAnimation("boss");
  al.x = -30;
  al.y = randomNumber(200, 350);
  al2.x = -40;
  al2.y = randomNumber(200, 350);
  boss.x = -60;
  boss.y = 5000;
  c.visible = false;
  i.visible = false;
  block.x = 367;
  block.y = 223;
  block.setAnimation("block");
  block.scale = 0.21;
  h1.x = 300;
  h1.y = 375;
  h2.x = 335;
  h2.y = 375;
  h3.x = 370;
  h3.y = 375;
  h1.setAnimation("<3");
  h2.setAnimation("<3");
  h3.setAnimation("<3");
  h1.scale = 0.15;
  h2.scale = 0.15;
  h3.scale = 0.15;
  bull1.x = -30000000;
  bull1.y = -300;
  bull2.x = -30000000;
  bull2.y = -300;
  bull3.x = -30000000;
  bull3.y = -300;
  turner.setAnimation("not");
  bar.x = 50;
  bar.y = 380;
  health.x = 50;
  health.y = 380;
  health.setAnimation("bosshealth");
  bar.setAnimation("bosshealthfill");
  health.visible = false;
  bar.visible = false;
  ready.setAnimation("ready");
  ready.visible = true;
  bigboi.x = -100000;
  bigboi.y = -100;
  bigboi.setAnimation("bigboi");
  bigboi.velocityX = 1;
  bigboi.scale = .35;
  bubble1.visible = false;
  defeathim.visible = false;
}
function start() {
  bar.visible = 0;
  health.visible = 0;
  if (keyWentDown("space")) {
    pick.visible = 1;
    playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
    phero1.visible = 1;
    phero2.visible = 1;
    button1.visible = 1;
    button2.visible = 1;
    stc.visible = 1;
    frame.visible = 1;
    hero1s.visible = 0;
    bosss.visible = 0;
    sts.visible = 0;
    sa.visible = 0;
    ctrl.visible = 0;
    als.visible = 0;
    screen = 2;
  }
  if (keyWentDown("ctrl")) {
    screen = 1;
    playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
    hero1s.visible = 0;
    bosss.visible = 0;
    sts.visible = 0;
    sa.visible = 0;
    ctrl.visible = 0;
    als.visible = 0;
    inst.visible = 1;
    exit.visible = 1;
  }
  if (jap == 0) {
    playSound("assets/Title-Screen---Pok-mon-RubySapphireEmerald.mp3", true);
    eship1.x = -5200;
    eship2.x = -5300;
    eship3.x = -5400;
    timean.velocityX = 1 ;
    timean.x = 0;
    a.visible = false;
    b.visible = false;
    ammopng.visible = false;
    scorepng.visible = false;
    ark.visible = false;
    core.visible = false;
    h1.visible = false;
    h2.visible = false;
    h3.visible = false;
    block.visible = false;
    hero.visible = false;
    hship.velocityX = 30;
    eship1.velocityX = 30;
    eship2.velocityX = 30;
    eship3.velocityX = 30;
    var timeall = World.seconds;
    jap = 1;
  }
  if (timean.x == 25) {
    sa.visible = true;
    ctrl.visible = 1;
  }
  if (timean.x == 60) {
    sa.visible = false;
  }
  if (timean.x == 75) {
    sa.visible = true;
  }
  if (timean.x == 115) {
    sa.visible = false;
  }
  if (timean.x == 120) {
    sa.visible = true;
  }
  if (timean.x == 150) {
    sa.visible = false;
    ctrl.visible = 0;
  }
  if (timean.x == 220) {
    ride = 1;
    sa.visible = true;
    als.visible = 1;
    bosss.visible = 1;
    hero1s.visible = 1;
    sts.visible = 1;
  }
  if (ride == 1) {
    if (hship.x > 1000) {
      hship.x = -200 - adda;
    }
    if (eship1.x > 800) {
      eship1.x = -400 - adda;
    }
    if (eship2.x > 700) {
      eship2.x = -500 - adda;
    }
    if (eship3.x > 600) {
      eship3.x = -600 - adda;
      adda = randomNumber(500, 5000);
    }
    if (sa.scale < .48 && .44 < sa.scale) {
      sastuff = 1;
    }
    if (sa.scale < .38) {
      sastuff = 0;
    }
    if (sastuff == 0) {
      sa.scale = sa.scale + .0005;
    } else {
      sa.scale = sa.scale - .0005;
    }
  }
  drawSprites();
}
function game() {
  if (gamereset == 0) {
    playSound("assets/mewwwtwoooo.mp3", true);
    resetall();
    timeall = World.seconds;
    if (heros == 1) {
      hero.setAnimation("hero1s");
    }
    if (heros == 2) {
      hero.setAnimation("hero2s");
    }
    gamereset = 1;
  }
  if (one.scale > .01) {
    one.scale = one.scale - .01;
  } else {
    one.scale = .01;
  }
  if (three.scale > .01) {
    three.scale = three.scale - .01;
  } else {
    three.scale = .01;
  }
  if (five.scale > .01) {
    five.scale = five.scale - .01;
  } else {
    five.scale = .01;
  }
  if (two.scale > .01) {
    two.scale = two.scale - .01;
  } else {
    two.scale = .01;
  }
  if (ten.scale > .01) {
    ten.scale = ten.scale - .01;
  } else {
    ten.scale = 0.01;
  }
  if (bosslife < 1) {
    win = 1;
  }
  if (lives < 1) {
    win = 2;
  }
  if (lives < 0) {
    lives = 0;
  }
  space.setAnimation("lab");
  bar1.displace(hero);
  bar2.displace(hero);
  timer = World.seconds;
  tf2 = 1;
  if (4 > hap) {
    realscore = score1;
  }
  if (World.seconds > timeall + 2.7) {
    ready.visible = false;
  }
  if (gun == 4) {
    rel = 2;
  } else {
    rel = 1;
  }
  if (ammo < 0) {
    ammo = 0;
  }
  if (lives > 3) {
    lives = 3;
  }
  if (hap == 0) {
    al.velocityX = 1;
    timeall = World.seconds;
    hap = 1;
  }
  if (use6 == 0 && World.seconds > timey + 1) {
    cap = 0;
    use6 = 1;
  }
  if (x2 == 0) {
    if (keyDown("up")) {
      hero.y = hero.y + -3;
      if (heros == 1) {
        hero.setAnimation("hero1");
      } else {
        hero.setAnimation("hero2");
      }
    } else if ((keyDown("down"))) {
      hero.y = hero.y + 3;
      if (heros == 1) {
        hero.setAnimation("hero1");
      } else {
        hero.setAnimation("hero2");
      }
    } else {
      if (heros == 1) {
        hero.setAnimation("hero1s");
      } else {
        hero.setAnimation("hero2s");
      }
    }
  }
  if (World.seconds > timey + 2) {
    map = 0;
    lol69 = 0;
  }
  if (gun == 3) {
    bullet.setAnimation("bullet2");
    bullet1.setAnimation("bullet2");
  } else {
    bullet.setAnimation("bull");
    bullet1.setAnimation("bull");
  }
  difficulty();
  Boss();
  luckyblock();
  hitark();
  life();
  push();
  gun1();
  collide();
  drawSprites();
  if (x1 == 0) {
    if (yesir == 0 && tf2 == 0) {
      math();
    }
    luckyshow();
    showscore();
    if (lol76 == 1) {
      textSize(40);
      stroke("blue");
      text(bosstime, 165, 390);
    }
  }
  if (x4 == 1) {
    stroke("blue");
    strokeWeight(3);
    textSize(30);
    if (4 > hap) {
      text(score1, 250, 90);
    } else {
      text(realscore, 250, 90);
    }
  }
  function luckyblock() {
    if (gun == 1) {
      turner.setAnimation("not");
    } else {
      turner.setAnimation("timerpower");
    }
    if (gun != 1) {
      if (crab == 0) {
        time2 = World.seconds;
        crab = 1;
      }
    }
    if (crab == World.seconds > time2 + 20) {
      gun = 1;
      crab = 0;
    }
    if (lucky == 5) {
      if (dab == 0) {
        timea = World.seconds;
        playSound("assets/block.mp3", false);
        dab = 1;
      }
      block.x = 200;
      block.y = 130;
      time.x = 20;
      if (timea + .8 > World.seconds) {
        block.scale = 1;
      }
      if (timea + .8 > World.seconds) {
        block.setAnimation("blocka");
      }
      if (World.seconds > timea + .8) {
        if (timea + 1.1 > World.seconds) {
          if (luckyr == 1) {
            block.setAnimation("heartcon");
            block.scale = .3;
            if (trap == 0) {
              lives = lives + 1;
              playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
              test = 0;
              trap = 1;
            }
          } else if ((luckyr == 2)) {
            block.setAnimation("ammocon");
            block.scale = 0.3;
            if (trap == 0) {
              ammo = ammo + 10;
              ten.scale = .5;
              trap = 1;
            }
          } else if ((luckyr == 3)) {
            block.setAnimation("pcon");
            if (use4 == 0) {
              turner.setAnimation("not");
              use4 = 1;
            }
            block.scale = 0.3;
            gun = 2;
          } else if ((luckyr == 4)) {
            block.setAnimation("increasecon");
            if (bap == 0) {
              gun = 1;
              bap = 1;
            }
            block.scale = 0.3;
            if (use4 == 0) {
              turner.setAnimation("not");
              use4 = 1;
            }
            if (bap == 0) {
              gun = 1;
              bap = 1;
            }
            gun = 3;
          } else if ((luckyr == 5)) {
            block.setAnimation("trollcon");
            block.scale = 0.3;
          } else {
            block.setAnimation("x2con");
            if (bap == 0) {
              gun = 1;
              bap = 1;
            }
            block.scale = 0.3;
            if (use4 == 0) {
              turner.setAnimation("not");
              use4 = 1;
            }
            gun = 4;
          }
        }
        if (World.seconds > timea + 2) {
          trap = 0;
        }
      }
      if (World.seconds > timea + 2) {
        block.setAnimation("block");
        lucky = 0;
        bap = 0;
        block.x = 367;
        block.y = 227;
        dab = 0;
        block.scale = 0.21;
        luckyr = randomNumber(1, 6 );
      }
      b.setAnimation("b");
      a.setAnimation("a");
    }
  }
  function collide() {
    if (bullet1.isTouching(al)) {
      if (cap == 0) {
        score1 = score1 + rel;
        playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
        use6 = 0;
        if (rel == 1) {
          one.scale = .5;
        } else {
          two.scale = .5;
        }
        cap = 1;
      }
      if (gun != 2) {
        bullet.x = -30;
      }
      if (lives > 0) {
        al.x = -60;
        al.y = randomNumber(200, 350);
      }
      if (lol69 == 0) {
        timey = World.seconds;
        lol69 = 1;
      }
    }
    if (bullet.isTouching(al)) {
      if (cap == 0) {
        score1 = score1 + rel;
        playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
        if (rel == 1) {
          one.scale = .5;
        } else {
          two.scale = .5;
        }
        use6 = 0;
        cap = 1;
      }
      if (gun != 2) {
        bullet.x = -30;
      }
      if (lives > 0) {
        al.x = -60;
        al.y = randomNumber(200, 350);
      }
      if (lol69 == 0) {
        timey = World.seconds;
        lol69 = 1;
      }
    }
    if (bullet1.isTouching(al2)) {
      if (cap == 0) {
        score1 = score1 + rel;
        playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
        use6 = 0;
        if (rel == 1) {
          one.scale = .5;
        } else {
          two.scale = .5;
        }
        cap = 1;
      }
      if (gun != 2) {
        bullet.x = -30;
      }
      if (lives > 0) {
        al2.x = -60;
        al2.y = randomNumber(200, 350);
      }
      if (lol69 == 0) {
        timey = World.seconds;
        lol69 = 1;
      }
    }
    if (bullet.isTouching(al2)) {
      if (cap == 0) {
        score1 = score1 + rel;
        playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
        use6 = 0;
        if (rel == 1) {
          one.scale = .5;
        } else {
          two.scale = .5;
        }
        cap = 1;
      }
      if (gun != 2) {
        bullet.x = -30;
      }
      if (lives > 0) {
        al2.x = -60;
        al2.y = randomNumber(200, 350);
      }
      if (lol69 == 0) {
        timey = World.seconds;
        lol69 = 1;
      }
    }
    if (bullet.isTouching(bull1)) {
      if (cap == 0) {
        use6 = 0;
        cap = 1;
      }
      if (gun != 2) {
        bullet.x = -30;
      }
      bull1.x = -600000;
    }
    if (bullet.isTouching(bigboi)) {
      if (cap == 0) {
        use6 = 0;
        cap = 1;
      }
      bullet.x = -30;
    }
    if (bullet.isTouching(bull1)) {
      if (cap == 0) {
        use6 = 0;
        cap = 1;
      }
      if (gun != 2) {
        bullet.x = -30;
      }
      bull1.x = -600000;
    }
    if (bullet1.isTouching(bull1)) {
      if (cap == 0) {
        use6 = 0;
        cap = 1;
      }
      if (gun != 2) {
        bullet.x = -30;
      }
      bull1.x = -600000;
    }
    if (bullet.isTouching(bull2)) {
      if (cap == 0) {
        use6 = 0;
        cap = 1;
      }
      if (gun != 2) {
        bullet.x = -30;
      }
      bull2.x = -600000;
    }
    if (bullet1.isTouching(bull2)) {
      if (cap == 0) {
        use6 = 0;
        cap = 1;
      }
      if (gun != 2) {
        bullet.x = -30;
      }
      bull2.x = -600000;
    }
    if (bullet.isTouching(bull3)) {
      if (cap == 0) {
        use6 = 0;
        cap = 1;
      }
      if (gun != 2) {
        bullet.x = -30;
      }
      bull3.x = -600000;
    }
    if (bullet1.isTouching(bull3)) {
      if (cap == 0) {
        use6 = 0;
        cap = 1;
      }
      if (gun != 2) {
        bullet.x = -30;
      }
      bull3.x = -600000;
    }
    if (bullet.isTouching(boss)) {
      if (cap == 0) {
        playSound("assets/Fortnite-Elimination-Sound-effect.mp3", false);
        use6 = 0;
        cap = 1;
      }
      bullet.x = -30;
      if (use5 == 1) {
        bosslife = bosslife - 1;
        bar.x = bar.x - 1.7;
      }
    }
    if (bullet1.isTouching(boss)) {
      if (cap == 0) {
        playSound("assets/Fortnite-Elimination-Sound-effect.mp3", false);
        realscore = realscore + rel;
        realscore = realscore + rel;
        use6 = 0;
        cap = 1;
      }
      bullet.x = -30;
      if (use5 == 1) {
        bosslife = bosslife - 1;
        bar.x = bar.x - 1.7;
      }
    }
  }
  function gun1() {
    if (keyWentDown("space") && use7 == 0) {
      if (ammo >= 1) {
        if (-20 < bullet.x) {
          if (100 > bullet.x) {
            if (-30 > bullet1.x) {
              ammo = ammo - 1;
              playSound("assets/shot.mp3", false);
              bullet1.x = hero.x - x;
              bullet1.y = hero.y + y;
            }
          }
        }
        if (100 > bullet1.x) {
          if (bullet.x < -30) {
            ammo = ammo - 1;
            playSound("assets/shot.mp3", false);
            bullet.x = hero.x - x;
            bullet.y = hero.y + y;
          }
        }
      } else {
        text("No Ammo", 200, 200);
      }
    }
    if (heros == 1) {
      x = 30;
      y = 7;
    }
    if (heros == 2) {
      x = 40;
      y = -10;
    }
  }
  function math() {
    if (tf == 1) {
      op1 = 275;
      op2 = 120;
    }
    if (tf == 2) {
      op1 = 120;
      op2 = 275;
    }
    stroke("black");
    textSize(35);
    text("X", 135, 125);
    textSize(50);
    text("=", 250, 130);
    text("?", 310, 130);
    text(math1, 190, 130);
    text(math2, 70, 130);
    textSize(40);
    text("A)", 70, 180);
    text("B)", 220, 180);
    text(ans, op1, 180);
    text(wans, op2, 180);
  }
  function showscore() {
    stroke("black");
    textSize(20);
    text("/5", 334, 230);
    textSize(40);
    if (4 > hap) {
      text(score1, 10, 60);
    } else {
      text(realscore, 10, 60);
    }
    text(ammo, 315, 60);
  }
  function luckyshow() {
    if (timer > World.seconds) {
      textSize(40);
      stroke("red");
      text(lucky, 305, 237);
    } else {
      textSize(40);
      stroke("yellow");
      text(lucky, 305, 237);
    }
  }
  function push() {
    if (lamb == 0) {
      time = World.seconds;
      lamb = 1;
    }
    if (World.seconds > time + 2) {
      if (hero.isTouching(a)) {
        if (keyWentDown("shift")) {
          tf2 = 0;
          a.setAnimation("a");
          if (tf == 1) {
            text("Wrong", 0, 15);
            ammo = ammo - 5;
            playSound("Minecraft-Damage-(Oof)---Sound-Effect-(HD).mp3", false);
            five.scale = .5;
            lucky = 0;
            timer = 2 + World.seconds;
            i.visible = true;
          }
          if (tf == 2) {
            text("+3 Ammo", 0, 15);
            ammo = ammo + 3;
            three.scale = .5;
            playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
            lucky = lucky + 1;
            if (lucky < 5) {
              c.visible = true;
            }
          }
          resetmath();
          time = World.seconds;
        }
      }
    }
    if (World.seconds > time + 2) {
      a.setAnimation("ao");
      b.setAnimation("bo");
      c.visible = false;
      i.visible = false;
      tf2 = 0;
    }
    if (World.seconds > time + 2) {
      if (hero.isTouching(b)) {
        if (keyWentDown("shift")) {
          tf2 = 0;
          b.setAnimation("b");
          if (tf == 2) {
            text("Wrong", 0, 15);
            ammo = ammo - 5;
            playSound("Minecraft-Damage-(Oof)---Sound-Effect-(HD).mp3", false);
            five.scale = .5;
            lucky = 0;
            timer = 2 + World.seconds;
            i.visible = true;
          }
          if (tf == 1) {
            text("+3 Ammo", 0, 15);
            ammo = ammo + 3;
            three.scale = .5;
            playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
            lucky = lucky + 1;
            if (lucky < 5) {
              c.visible = true;
            }
          }
          resetmath();
          time = World.seconds;
        }
      }
    }
  }
  function hitark() {
    if (bigboi.x > 270) {
      lives = lives - 3;
      playSound("Minecraft-Damage-(Oof)---Sound-Effect-(HD).mp3", false);
    }
    if (al.x > 270) {
      ineedsleep = 0;
      if (lives > 0) {
        al.x = -60;
        al.y = randomNumber(200, 350);
      }
      lives = lives - 1;
      playSound("Minecraft-Damage-(Oof)---Sound-Effect-(HD).mp3", false);
    }
    if (al2.x > 270) {
      ineedsleep = 0;
      if (lives > 0) {
        al2.x = -60;
        al2.y = randomNumber(200, 350);
      }
      lives = lives - 1;
      playSound("Minecraft-Damage-(Oof)---Sound-Effect-(HD).mp3", false);
    }
    if (bull1.x > 270) {
      ineedsleep = 0;
      if (lives > 0) {
        bull1.x = -600000;
      }
      timey.velocityX = 1;
      if (timey.x > 1) {
        map = 0;
        timey.x = 0;
        timey.velocityX = 0;
      }
      lives = lives - 1;
      playSound("Minecraft-Damage-(Oof)---Sound-Effect-(HD).mp3", false);
    }
    if (bull2.x > 270) {
      ineedsleep = 0;
      if (lives > 0) {
        bull2.x = -600000;
      }
      timey.velocityX = 1;
      if (timey.x > 1) {
        map = 0;
        timey.x = 0;
        timey.velocityX = 0;
      }
      lives = lives - 1;
      playSound("Minecraft-Damage-(Oof)---Sound-Effect-(HD).mp3", false);
    }
    if (bull3.x > 270) {
      ineedsleep = 0;
      if (lives > 0) {
        bull3.x = -60000;
      }
      timey.velocityX = 1;
      if (timey.x > 1) {
        map = 0;
        timey.x = 0;
        timey.velocityX = 0;
      }
      lives = lives - 1;
      playSound("Minecraft-Damage-(Oof)---Sound-Effect-(HD).mp3", false);
    }
  }
  function resetmath() {
  tf = randomNumber(1, 2);
  math1 = randomNumber(1, end);
  math2 = randomNumber(1, end);
  ans = math1 * math2;
  wans = ans + randomNumber(1, 5) - randomNumber(1,5);
  if (ans == wans) {
    wans = wans - 1;
  }
  }
  function difficulty() {
    if (World.seconds > timeall + 60) {
      end = 15;
    }
    if (World.seconds > timeall + 120) {
      if (hap == 1) {
        al2.x = -30;
        al2.velocityX = 1;
        hap = 2;
      }
    }
    if (World.seconds > timeall + 120) {
      realscore = score1;
      if (hap == 2) {
        al2.velocityX = 1.5;
        al.velocityX = 1.5;
        hap = 3;
      }
    }
    if (World.seconds > timeall + 240) {
      if (hap == 3) {
        stopSound("assets/mewwwtwoooo.mp3");
        al2.velocityX = -3;
        al.velocityX = -3;
        boss.y = 275;
        time3 = World.seconds + 11;
        use7 = 1;
        hap = 4;
      }
    }
    if (win == 0 && World.seconds > timeall + 420) {
      if (hap == 4) {
        time3 = World.seconds + 0;
        bar.visible = true;
        health.visible = true;
        hap = 5;
      }
      if (hap == 5) {
        if (time3 + 5 > World.seconds) {
          if (275 > boss.y) {
            boss.velocityY = .4;
          } else {
            boss.velocityY = 0;
          }
          if (275 < boss.y) {
            boss.velocityY = -.4;
          } else {
            boss.velocityY = 0;
          }
        }
        if (time3 + 8 > World.seconds) {
          boss.setAnimation("open1");
          bigboi.x = boss.x;
          bigboi.y = boss.y;
        }
        if (time3 + 8 > World.seconds) {
          boss.setAnimation("boss");
        }
      }
    }
  }
  function Boss() {
    if (hap == 4) {
      ddd = ddd + 1;
      if (ddd == 30) {
        bosstime = bosstime - 1;
        ddd = 0;
      }
      if (mega == 0) {
        playSound("assets/rubbbbby.mp3", true);
        mega = 1;
      }
      if (70 > boss.x) {
        boss.velocityX = .6;
        bar.visible = true;
      } else {
        boss.velocityX = 0;
        bar.visible = true;
      }
      bar.visible = true;
      health.visible = true;
      if (time3 + 5 > World.seconds) {
        if (World.seconds > time3) {
          bubble1.visible = true;
          bar.visible = true;
          defeathim.visible = true;
          yesir = 1;
        }
      } else {
        bubble1.visible = false;
        bar.visible = true;
        defeathim.visible = false;
        yesir = 0;
        lol76 = 1;
      }
      if (World.seconds > time3 + 5) {
        use7 = 0;
        if (bossa == 0) {
          if (boss.y < 340) {
            boss.velocityY = 1;
            bar.visible = true;
            if (boss.y > 338) {
              bossa = 1;
            }
          }
        }
        if (bossa == 1) {
          if (boss.y > 230) {
            boss.velocityY = -1;
            if (boss.y < 232) {
              bossa = 0;
            }
          }
        }
        if (use1 == 0) {
          timesup = World.seconds + randomNumber(4, 7);
          use1 = 1;
        }
        if (timesup + 1 > World.seconds && World.seconds > timesup - 1) {
          use2 = 1;
        } else {
          use2 = 0;
        }
        if (use2 == 1) {
          if (use3 == 0) {
            use5 = 1;
            if (x5 == 0) {
              playSound("Cannon-Burp-(Sound-Effect).mp3", false);
              x5 = 1;
            }
            bull1.x = boss.x;
            bull1.y = boss.y + 5;
          }
          if (use3 == 1) {
            if (x5 == 0) {
              playSound("Cannon-Burp-(Sound-Effect).mp3", false);
              x5 = 1;
            }
            bull2.x = boss.x;
            bull2.y = boss.y + 5;
          }
          if (use3 == 2) {
            bull3.x = boss.x;
            if (x5 == 0) {
              playSound("Cannon-Burp-(Sound-Effect).mp3", false);
              x5 = 1;
            }
            bull3.y = boss.y + 5;
          }
          boss.setAnimation("open");
        } else {
          boss.setAnimation("boss");
        }
        if (use3 == 0) {
          if (World.seconds > timesup + 3) {
            use3 = 1;
            x5 = 0;
            timesup = World.seconds + randomNumber(0, 3);
          }
        }
        if (use3 == 1) {
          if (World.seconds > timesup + 3) {
            use3 = 2;
            x5 = 0;
            timesup = World.seconds + randomNumber(0, 3);
          }
        }
        if (use3 == 2) {
          if (World.seconds > timesup + 3) {
            use3 = 0;
            x5 = 0;
            timesup = World.seconds + randomNumber(0, 3);
          }
        }
      }
    }
  }
  function life() {
    if (lives == 0) {
    if (ineedsleep == 0) {
    timeh = .4 + World.seconds;
    ineedsleep = 1;
    }
    if (timeh > World.seconds) {
    h1.setAnimation("<3emw");
    h2.setAnimation("<3emw");
    h3.setAnimation("<3emw");
    } else {
    h1.setAnimation("<3em");
    h2.setAnimation("<3em");
    h3.setAnimation("<3em");
    }
    }
    if (lives == 1) {
    if (ineedsleep == 0) {
    timeh = .4 + World.seconds;
    ineedsleep = 1;
    }
    if (timeh > World.seconds) {
    h1.setAnimation("<3w");
    h2.setAnimation("<3emw");
    h3.setAnimation("<3emw");
    } else {
    h1.setAnimation("<3");
    h2.setAnimation("<3em");
    h3.setAnimation("<3em");
    }
    }
    if (lives == 2) {
    if (ineedsleep == 0) {
    timeh = .4 + World.seconds;
    ineedsleep = 1;
    }
    if (timeh > World.seconds) {
    h1.setAnimation("<3w");
    h2.setAnimation("<3w");
    h3.setAnimation("<3emw");
    } else {
    h1.setAnimation("<3");
    h2.setAnimation("<3");
    h3.setAnimation("<3em");
    }
    }
    if (lives == 3) {
    if (ineedsleep == 0) {
    timeh = .4 + World.seconds;
    ineedsleep = 1;
    }
    if (timeh > World.seconds) {
    h1.setAnimation("<3w");
    h2.setAnimation("<3w");
    h3.setAnimation("<3w");
    } else {
    h1.setAnimation("<3");
    h2.setAnimation("<3");
    h3.setAnimation("<3");
    }
    }
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
