# AI Agent กับการชำระเงินและเศรษฐกิจยุคใหม่

## สรุปความรู้พื้นฐาน

เอกสาร 01 สำหรับผู้อ่านสายเทคโนโลยีและธุรกิจไทย • จุดตัดข้อมูล 30 กันยายน 2026 • ฉบับความรู้พื้นฐานประกอบ thesis 1 ที่อนุมัติแล้ว

ประเด็นสำคัญคือซอฟต์แวร์เริ่มเชื่อมการตัดสินใจเข้ากับการใช้เงินได้โดยตรง ทั้งซื้อสินค้าให้คนและซื้อเครื่องมือเพื่อทำงานต่อ แต่หลักฐานยังไม่รองรับคำว่าเศรษฐกิจอัตโนมัติที่แพร่หลายหรือผู้ชนะที่แน่นอน

ชุดนี้แยก **สิ่งที่ทำได้ สิ่งที่เปิดให้ใช้ สิ่งที่เกิดขึ้นจริง และสิ่งที่ยังคาดการณ์** ออกจากกัน เป็นความรู้พื้นฐาน ไม่ใช่สคริปต์หรือแผนฉาก

## 1 เรื่องเดียวกันมีการซื้อสองแบบ

**แบบ A ซื้อแทนผู้บริโภค** เช่น ช่วยเลือกสินค้า เปรียบเทียบราคา จัดตะกร้า และส่งคำสั่งซื้อ บางระบบยังให้คนยืนยันทุกครั้ง บางมาตรฐานออกแบบให้มอบอำนาจล่วงหน้าภายใต้เงื่อนไข [S01](https://openai.com/index/buy-it-in-chatgpt/) [S03](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol)

**แบบ B ซื้อปัจจัยเพื่อทำงาน** เช่น Agent ซื้อข้อมูลหนึ่งคำค้น เช่า browser session หรือเรียก API แล้วนำผลไปทำงานต่อ สิ่งที่ซื้อจึงเป็นต้นทุนผลิตงานของธุรกิจ ไม่ใช่ของใช้ของผู้บริโภค [S08](https://www.coinbase.com/developer-platform/discover/launches/sql-api-x402) [S11](https://mpp.browserbase.com/) [S12](https://parallel.ai/blog/tempo-stripe-mpp)

**ข้อจำกัด C ใช้กับทั้งสองแบบ** ใครให้สิทธิ์ ใช้เงินของใคร วงเงินเท่าไร จ่ายให้ใคร หยุดเมื่อใด และใครจัดการเมื่อผิดพลาด คำว่า autonomous ไม่ได้แปลว่าไม่มีเจ้าของงบหรือไม่ต้องรับผิดชอบ

## 2 คำศัพท์ที่ต้องแยกให้ออก

- **Agent** ในงานนี้ คือซอฟต์แวร์ที่เลือกและเรียกการกระทำหลายขั้นเพื่อบรรลุเป้าหมาย ไม่ใช่ชื่อเรียก chatbot ทุกตัว
- **Delegated authority** คืออำนาจที่คนหรือองค์กรให้ไปทำงานแทน อาจจำกัดสินค้า ผู้ขาย เวลา และงบรวม
- **Mandate** คือบันทึกสิ่งที่อนุญาตให้ Agent ทำ ใน AP2 ใช้หลักฐานดิจิทัลที่ลงนามเพื่อเชื่อมเจตนา ตะกร้า และการจ่าย [S03](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol)
- **Payment token** เป็นตัวแทนข้อมูลจ่ายเงินที่อาจจำกัดการใช้งาน ไม่ใช่เหรียญคริปโตเสมอไป [S01](https://openai.com/index/buy-it-in-chatgpt/) [S13](https://corporate.visa.com/en/sites/visa-perspectives/innovation/visa-card-specification-sdk-for-machine-payments-protocol.html)
- **Settlement** คือขั้นชำระบัญชีหรือเคลื่อนมูลค่าตามระบบ ไม่เท่ากับการได้รับสินค้าถูกต้องหรือการยุติข้อพิพาท
- **Merchant of record** คือผู้ขายที่รับผิดชอบธุรกรรมกับลูกค้า ในตัวอย่างที่ศึกษา ร้านค้ายังมีบทบาทด้านส่งสินค้า คืนเงิน และบริการหลังขาย [S01](https://openai.com/index/buy-it-in-chatgpt/) [S06](https://blog.google/products-and-platforms/products/shopping/google-shopping-cart/)

## 3 สิ่งที่เปลี่ยนแล้วและสิ่งที่ยังไม่ควรเหมารวม

**ข้อเท็จจริงจากประกาศผลิตภัณฑ์** OpenAI เปิด Instant Checkout ในสหรัฐฯ เมื่อ 29 กันยายน 2025 โดยเริ่มจาก Etsy และการซื้อชิ้นเดียว ต่อมา 24 มีนาคม 2026 บริษัทระบุว่ารูปแบบแรกยืดหยุ่นไม่พอ จึงเน้น product discovery และให้ร้านค้าใช้ checkout ของตนเอง [S01](https://openai.com/index/buy-it-in-chatgpt/) [S02](https://openai.com/index/powering-product-discovery-in-chatgpt/)

ดังนั้น การเล่าว่า ChatGPT เปิด checkout ในปี 2025 แล้วจึงกำลังแทนร้านค้าทั้งหมด เป็นการข้ามหลักฐานการปรับทิศทาง ไม่ควรใช้ประกาศวันเปิดตัวเป็นภาพปัจจุบัน

**ข้อเท็จจริงจากผู้ให้บริการ** Google เปิด UCP ในมกราคม 2026 และอัปเดต 16 กันยายนว่าฮับเชื่อมร้านค้ารองรับ cart transfer กลับเว็บร้านค้า โดยความสามารถใหม่ทยอยเปิดในสหรัฐฯ ก่อน [S05](https://blog.google/products/ads-commerce/agentic-commerce-ai-tools-protocol-retailers-platforms/) [S07](https://blog.google/products-and-platforms/products/shopping/google-shopping-updates-holiday-shopping/)

**ข้อเท็จจริงจากกรณีที่รายงาน** Mastercard, Worldline และ ING ประกาศธุรกรรมจริงใน production เมื่อ 2 มิถุนายน 2026 แต่ผู้บริโภคยังอนุมัติการซื้อขั้นสุดท้าย นี่พิสูจน์ว่าเส้นทางทำงานได้ในกรณีนั้น ไม่ได้พิสูจน์การซื้อแบบไร้คนจำนวนมาก [S14](https://www.mastercard.com/news/europe/en/newsroom/press-releases/en/2026/worldline-ing-and-mastercard-complete-a-live-end-to-end-european-agentic-payment-in-production/)

## 4 โปรโตคอลหลายชื่อทำหน้าที่ต่างกัน

**ACP และ UCP** ช่วยให้ระบบสนทนากับระบบร้านค้าเกี่ยวกับสินค้าและการซื้อ ทั้งสองชื่อไม่ใช่สกุลเงิน [S01](https://openai.com/index/buy-it-in-chatgpt/) [S02](https://openai.com/index/powering-product-discovery-in-chatgpt/) [S05](https://blog.google/products/ads-commerce/agentic-commerce-ai-tools-protocol-retailers-platforms/)

**AP2** มุ่งที่หลักฐานการมอบอำนาจและความเชื่อมโยงระหว่างเจตนา ตะกร้า และการชำระเงิน Google ประกาศ v0.2 พร้อมส่วน Human Not Present และส่งต่อให้ FIDO Alliance เมื่อ 28 เมษายน 2026 [S03](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol) [S04](https://blog.google/products-and-platforms/platforms/google-pay/agent-payments-protocol-fido-alliance/)

**x402 และ MPP** เชื่อมการขอทรัพยากรผ่านเว็บกับการจ่ายเงิน ตัวอย่างเส้นทางคือ ขอข้อมูล → รับราคา → ตรวจสิทธิ์และงบ → ส่งหลักฐานการจ่าย → รับผลลัพธ์ ไม่จำเป็นต้องพาคนไปสมัครแพ็กเกจใหม่ทุกครั้ง [S08](https://www.coinbase.com/developer-platform/discover/launches/sql-api-x402) [S10](https://stripe.com/blog/machine-payments-protocol)

**ข้อควรระวัง** มาตรฐานสื่อสาร มาตรฐานอนุญาต และรางชำระเงินจริงเป็นคนละชั้น จึงไม่ควรนำรายชื่อทั้งหมดมาแข่งกันเหมือนทำสิ่งเดียวกัน และไม่ควรสรุปว่า Agent ต้องใช้คริปโตเท่านั้น Visa มีข้อกำหนดบัตรสำหรับ MPP ด้วย [S13](https://corporate.visa.com/en/sites/visa-perspectives/innovation/visa-card-specification-sdk-for-machine-payments-protocol.html)

## 5 ตัวอย่างเศรษฐกิจที่ซื้อเครื่องมือเป็นรายครั้ง

**ข้อเท็จจริงจากเอกสารบริการ** Coinbase ประกาศ SQL API สำหรับข้อมูลบน Base ผ่าน x402 ราคา 0.10 ดอลลาร์ต่อ query [S08](https://www.coinbase.com/developer-platform/discover/launches/sql-api-x402)

หน้า Browserbase ที่ตรวจวันที่ 30 กันยายนระบุ browser session 0.12 ดอลลาร์ต่อชั่วโมง และ search หรือ fetch 0.01 ดอลลาร์ต่อ request พร้อม x402 และ MPP [S11](https://mpp.browserbase.com/)

Parallel ประกาศ API สำหรับ search, extract และ research ผ่าน MPP เป็นรายใช้ [S12](https://parallel.ai/blog/tempo-stripe-mpp) สิ่งเหล่านี้ยืนยันว่ามีข้อเสนอขายปัจจัยการผลิตที่ซอฟต์แวร์เข้าถึงได้ ไม่ได้ยืนยันยอดลูกค้า รายได้ หรือผลตอบแทนของธุรกิจ ผู้วิจัยไม่ได้ซื้อหรือทดสอบธุรกรรมจริง

**สถานการณ์สมมติ** บริษัทให้งบ Agent 1 ดอลลาร์เพื่อเตรียมรายงาน Agent อาจเลือกซื้อข้อมูลและ browser time ภายในงบ หากต้นทุนรวมกับการตรวจงานต่ำกว่าประโยชน์จึงคุ้ม ตัวเลขงบนี้ใช้เพื่ออธิบาย ไม่ใช่ benchmark

## 6 ทำไมจำนวน payment ไม่เท่ากับเศรษฐกิจของ Agent

**ข้อค้นพบจากงานวัด** TRM Labs วิเคราะห์ x402 แล้วประเมินสัดส่วนมูลค่าที่มีลักษณะคล้าย Agent อยู่ที่ 0.6–7.5% ของมูลค่าหลังคัดกรอง 25.62 ล้านดอลลาร์ ไม่ใช่สัดส่วนของตลาดการจ่ายเงินทั้งหมด [S15](https://www.trmlabs.com/trm-tech-blog/whos-actually-paying-measuring-ai-agent-payments-onchain)

ตัวเลขนี้มาจากเกณฑ์พฤติกรรม ไม่ใช่การเห็นว่าโมเดล AI ตัดสินใจจริง และอาจนับ Agent ที่จ่ายบริการเดิมซ้ำต่ำเกินไป จึงไม่ใช่หลักฐานว่าที่เหลือทั้งหมดปลอมหรือไม่มีประโยชน์

**ข้อค้นพบอีกด้าน** Adobe วัด traffic จาก AI ที่ส่งคนไปเว็บร้านค้าสหรัฐฯ พบการเติบโตและ conversion ที่ดีขึ้น แต่เป็นการซื้อหลัง referral ไม่ใช่จำนวนครั้งที่ Agent ถือสิทธิ์จ่ายเอง [S16](https://business.adobe.com/blog/ai-traffic-surge-retail-sites-not-machine-readable)

## 7 เงินที่จ่ายได้ยังต้องมีความไว้วางใจ

**บทวิเคราะห์** การลงนามช่วยพิสูจน์ว่าอนุญาตอะไร แต่ไม่รับประกันว่าข้อมูลสินค้าถูกต้อง บริการคุ้มค่า หรือการส่งมอบสำเร็จ การมอบอำนาจจึงต้องมีการตรวจผู้รับเงิน วงเงินรวม การป้องกันจ่ายซ้ำ และช่องทางหยุดหรือแก้ไข [S03](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol) [S18](https://arxiv.org/html/2607.19545v1) [S19](https://www.imf.org/-/media/files/publications/imf-notes/2026/english/insea2026004.pdf)

งานความปลอดภัย x402 พบข้อบกพร่องใน facilitator ที่ตรวจ และมีการแจ้งแก้ไขแล้ว ผลศึกษารุ่นเก่าไม่ควรถูกเล่าว่าผู้ให้บริการทุกแห่งยังมีช่องโหว่นั้นในวันนี้ [S18](https://arxiv.org/html/2607.19545v1)

ประเด็นความรับผิดยังขึ้นกับผู้เกี่ยวข้อง สัญญา และเขตอำนาจ เอกสารนี้ไม่ได้ตัดสินข้อกฎหมายไทยหรือรับรองว่าระบบใดมีให้ใช้ในไทยทั้งหมด [S19](https://www.imf.org/-/media/files/publications/imf-notes/2026/english/insea2026004.pdf)

## 8 สิ่งที่ผู้อ่านควรติดตามต่อ

สำหรับร้านค้า: ข้อมูลสินค้า ราคา stock และเงื่อนไขหลังขายพร้อมให้เครื่องอ่านหรือไม่

สำหรับผู้สร้าง Agent: งบถูกบังคับจริงนอกโมเดลหรือเป็นเพียงข้อความใน prompt และวัดต้นทุนต่องานที่สำเร็จได้หรือยัง

สำหรับผู้ดูแลเงิน: การอนุมัติ การจ่าย และการส่งมอบถูกผูกเป็นหลักฐานเดียวกันหรือไม่

**บทวิเคราะห์รวม** โอกาสอยู่ที่การลดแรงเสียดทานในการซื้อและผลิตงาน ส่วนขนาดตลาด ผู้ชนะ และความเต็มใจมอบอำนาจยังต้องพิสูจน์ อ่านวิธีประเมินหลักฐานและเหตุผลของ thesis ที่อนุมัติในเอกสาร 02

## แหล่งข้อมูลที่อ้างถึง

ทุกแหล่งเปิดตรวจ 30 กันยายน 2026 หมายเลข S ใช้ตรงกันทั้งสองเอกสาร วันที่ด้านล่างคือวันเผยแพร่ เว้นแต่ระบุว่าเป็นวันอ่าน

### S01 OpenAI

[Buy it in ChatGPT](https://openai.com/index/buy-it-in-chatgpt/) • 2025-09-29

ประกาศเปิดตัวในสหรัฐฯ ปี 2025 ใช้ยืนยันประวัติ ไม่ใช้แทนสถานะปัจจุบัน

### S02 OpenAI

[Powering Product Discovery in ChatGPT](https://openai.com/index/powering-product-discovery-in-chatgpt/) • 2026-03-24

การปรับผลิตภัณฑ์และ merchant checkout จากผู้ให้บริการเอง

### S03 Google Cloud

[Powering AI commerce with AP2](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol) • 2025-09-17

วันที่บนหน้าที่เปิดอ่านคือ 17 ก.ย. แม้ดัชนีค้นหาบางรายการแสดง 16 ก.ย.; กลไกและเจตนาการออกแบบ

### S04 Google

[AP2 donation to FIDO Alliance](https://blog.google/products-and-platforms/platforms/google-pay/agent-payments-protocol-fido-alliance/) • 2026-04-28

ประกาศ AP2 v0.2 และการส่งต่อมาตรฐาน ไม่ใช่สถิติใช้งาน

### S05 Google

[New tech and tools for retailers](https://blog.google/products/ads-commerce/agentic-commerce-ai-tools-protocol-retailers-platforms/) • 2026-01-11

ประกาศ UCP และความเข้ากันได้กับโปรโตคอลอื่น

### S06 Google

[Introducing Universal Cart](https://blog.google/products-and-platforms/products/shopping/google-shopping-cart/) • 2026-05-19

แผน rollout และ merchant of record ต้องอ่านร่วมกับ S07

### S07 Google

[Boost your holiday sales with agentic commerce updates](https://blog.google/products-and-platforms/products/shopping/google-shopping-updates-holiday-shopping/) • 2026-09-16

สถานะล่าสุดที่ใช้ในชุดนี้ UCP hub และ cart transfer; ตัวเลขร้านค้าเป็นคำกล่าวบริษัท

### S08 Coinbase

[CDP SQL API accepts x402](https://www.coinbase.com/developer-platform/discover/launches/sql-api-x402) • 2026-02-12

ประกาศ endpoint ราคา และขั้นตอน ไม่ใช่การทดสอบจ่ายเงินจริงของผู้วิจัย

### S10 Stripe

[Introducing Machine Payments Protocol](https://stripe.com/blog/machine-payments-protocol) • 2026-03-18

กลไกและผู้ใช้งานที่ประกาศเปิดตัว ไม่ใช่ข้อมูลรายได้ของตลาด

### S11 Browserbase

[Payment Gateway](https://mpp.browserbase.com/) • อ่าน 2026-09-30

หน้า endpoint และราคาปัจจุบัน ไม่มีวันเผยแพร่บนหน้า ไม่ได้ซื้อบริการทดสอบ

### S12 Parallel

[Parallel is live on Tempo with MPP](https://parallel.ai/blog/tempo-stripe-mpp) • 2026-03-18

คำประกาศจากผู้ขาย API และเอกสาร integration; ไม่ใช้ข้อความโฆษณาเป็นผลวัด

### S13 Visa

[Card specification and SDK for MPP](https://corporate.visa.com/en/sites/visa-perspectives/innovation/visa-card-specification-sdk-for-machine-payments-protocol.html) • 2026-03-18

หลักฐานว่า machine payments ไม่จำเป็นต้องมีแต่ stablecoins

### S14 Mastercard Worldline ING

[Live end-to-end European agentic payment in production](https://www.mastercard.com/news/europe/en/newsroom/press-releases/en/2026/worldline-ing-and-mastercard-complete-a-live-end-to-end-european-agentic-payment-in-production/) • 2026-06-02

กรณีซื้อในเนเธอร์แลนด์ มี explicit approval; ไม่ใช่ยอด adoption ทั้งยุโรป

### S15 TRM Labs Noah Hodge

[Who is actually paying](https://www.trmlabs.com/trm-tech-blog/whos-actually-paying-measuring-ai-agent-payments-onchain) • 2026-09-09

งานวิเคราะห์ข้อมูลเองของผู้ขาย blockchain intelligence; heuristic ไม่ใช่ ground truth

### S16 Adobe Vivek Pandya

[AI traffic surge and machine readability](https://business.adobe.com/blog/ai-traffic-surge-retail-sites-not-machine-readable) • 2026-04-16

ข้อมูล referral ของ US retail เดือน มี.ค. 2026; observational และผู้เผยแพร่ขายเครื่องมือการตลาด

### S18 Wang Yang Chen Ji Payer

[When HTTP 402 Meets the Blockchain](https://arxiv.org/html/2607.19545v1) • 2026-07-21

ฉบับ v1 ระบุ USENIX Security 2026; ทดสอบ facilitator รุ่นช่วงต้นปี และข้อมูล chain ปี 2025 ไม่ใช่ audit สถานะวันนี้

### S19 Davidovic and Tourpe IMF Note 2026/004

[How Agentic AI Will Reshape Payments](https://www.imf.org/-/media/files/publications/imf-notes/2026/english/insea2026004.pdf) • 2026-04

บทวิเคราะห์ของผู้เขียน ไม่ใช่ข้อกฎหมายหรือมติ IMF; ใช้ PDF หน้า 4, 8-10, 17-20

