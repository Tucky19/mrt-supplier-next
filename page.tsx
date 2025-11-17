"use client";

import Image from "next/image";

const HERO_IMAGE = "/mrt-hero.jpg"; // ใส่ไฟล์จริงใน /public

export default function HomePage() {
  return (
    <div className="mrt-page">
      {/* NAVBAR */}
      <header className="mrt-nav">
        <div className="mrt-container mrt-nav-inner">
          <a href="#top" className="mrt-logo">
            <div className="mrt-logo-mark">MRT</div>
            <div className="mrt-logo-text">
              <span className="mrt-logo-main">MRT SUPPLIER</span>
              <span className="mrt-logo-sub">Industrial Parts &amp; Filters</span>
            </div>
          </a>

          <nav className="mrt-nav-links">
            <a href="#products">Products</a>
            <a href="#industries">Industries</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="mrt-btn mrt-btn-primary">
            Get a Quote
          </a>
        </div>
      </header>

      {/* MAIN */}
      <main id="top">
        {/* HERO */}
        <section className="mrt-hero">
          {/* hero image */}
          <div className="mrt-hero-image-wrapper">
            <Image
              src={HERO_IMAGE}
              alt="Industrial bearings and filters from NTN, Donaldson and MANN-FILTER"
              fill
              priority
              className="mrt-hero-image-overlay"
            />
          </div>
          <div className="mrt-hero-gradient" />

          {/* hero text */}
          <div className="mrt-hero-content">
            <div className="mrt-container mrt-hero-inner">
              <div>
                <p className="mrt-hero-kicker">MRT SUPPLIER • BEARINGS &amp; FILTERS</p>
                <h1 className="mrt-hero-heading">
                  Supplying Industrial Parts &amp; Equipment
                </h1>
                <p className="mrt-hero-subtext">
                  จัดหาและดูแลอะไหล่อุตสาหกรรมสำหรับโรงงาน เครื่องจักรงานหนัก และยานพาหนะ
                  พร้อมช่วยลดเวลาหยุดเครื่องและทำให้สต๊อกอะไหล่ของคุณชัดเจนขึ้น.
                </p>

                <div className="mrt-hero-actions">
                  <a href="#contact" className="mrt-btn mrt-btn-primary">
                    ขอใบเสนอราคา
                  </a>
                  <a href="#products" className="mrt-btn mrt-btn-outline">
                    ดูสินค้า
                  </a>
                </div>

                <div className="mrt-hero-brand-chips">
                  <span className="mrt-chip">NTN Bearings</span>
                  <span className="mrt-chip">Donaldson Filters</span>
                  <span className="mrt-chip">MANN-FILTER</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BRAND STRIP */}
        <section className="mrt-section mrt-brand-strip">
          <div className="mrt-container">
            <p className="mrt-section-kicker">Brands We Supply</p>
            <div className="mrt-brand-row">
              <span className="mrt-brand-pill">NTN BEARINGS</span>
              <span className="mrt-brand-pill">DONALDSON FILTERS</span>
              <span className="mrt-brand-pill">MANN-FILTER</span>
              <span className="mrt-brand-pill">OTHER INDUSTRIAL PARTS</span>
            </div>
          </div>
        </section>

        {/* PRODUCT CATEGORIES */}
        <section id="products" className="mrt-section mrt-product-categories">
          <div className="mrt-container">
            <h2 className="mrt-section-title">Product Categories</h2>
            <p className="mrt-section-subtitle">
              High-quality industrial parts for factories, maintenance teams and
              heavy-duty applications.
            </p>

            <div className="mrt-product-grid">
              {/* 1 */}
              <div className="mrt-product-card">
                <div>
                  <div className="mrt-product-icon">🛞</div>
                  <h3>Bearings</h3>
                  <p>
                    NTN high-precision bearings for industrial and automotive
                    applications.
                  </p>
                </div>
                <a href="#" className="mrt-product-btn">
                  Explore →
                </a>
              </div>

              {/* 2 */}
              <div className="mrt-product-card">
                <div>
                  <div className="mrt-product-icon">🏭</div>
                  <h3>Industrial Filters</h3>
                  <p>
                    High-performance filters for dust, contaminants and
                    heavy-duty systems.
                  </p>
                </div>
                <a href="#" className="mrt-product-btn">
                  Explore →
                </a>
              </div>

              {/* 3 */}
              <div className="mrt-product-card">
                <div>
                  <div className="mrt-product-icon">💧</div>
                  <h3>Hydraulic Filters</h3>
                  <p>
                    Reliable Donaldson hydraulic filtration for machinery and
                    equipment.
                  </p>
                </div>
                <a href="#" className="mrt-product-btn">
                  Explore →
                </a>
              </div>

              {/* 4 */}
              <div className="mrt-product-card">
                <div>
                  <div className="mrt-product-icon">🛢️</div>
                  <h3>Oil Filters</h3>
                  <p>
                    Premium oil filtration solutions for engines and industrial
                    systems.
                  </p>
                </div>
                <a href="#" className="mrt-product-btn">
                  Explore →
                </a>
              </div>

              {/* 5 */}
              <div className="mrt-product-card">
                <div>
                  <div className="mrt-product-icon">🌬️</div>
                  <h3>Air Filters</h3>
                  <p>
                    Effective air purification for clean engine and industrial
                    operations.
                  </p>
                </div>
                <a href="#" className="mrt-product-btn">
                  Explore →
                </a>
              </div>

              {/* 6 */}
              <div className="mrt-product-card">
                <div>
                  <div className="mrt-product-icon">⛽</div>
                  <h3>Fuel Filters</h3>
                  <p>
                    Designed to keep contaminants out of fuel systems for
                    maximum efficiency.
                  </p>
                </div>
                <a href="#" className="mrt-product-btn">
                  Explore →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section id="industries" className="mrt-section mrt-industries">
          <div className="mrt-container">
            <h2 className="mrt-section-title">Industries We Serve</h2>
            <p className="mrt-section-subtitle">
              Solutions for factories, heavy equipment, maintenance teams and
              transport fleets.
            </p>

            <div className="mrt-industries-grid">
              {/* 1 Factory */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Factory</div>
                  <h3 className="font-semibold mb-2">
                    Factory &amp; Manufacturing
                  </h3>
                  <p className="text-sm text-slate-300">
                    Bearings, hydraulic &amp; lubrication filters for production
                    lines, conveyors and industrial machines.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Production line</span>
                  <span>Conveyor</span>
                  <span>Machinery</span>
                </div>
              </div>

              {/* 2 Construction */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Construction</div>
                  <h3 className="font-semibold mb-2">
                    Construction &amp; Heavy Equipment
                  </h3>
                  <p className="text-sm text-slate-300">
                    Filtration and bearing solutions for excavators, loaders,
                    cranes and off-road equipment.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Excavator</span>
                  <span>Loader</span>
                  <span>Crane</span>
                </div>
              </div>

              {/* 3 Maintenance */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Maintenance</div>
                  <h3 className="font-semibold mb-2">Maintenance &amp; MRO</h3>
                  <p className="text-sm text-slate-300">
                    Stocking critical filters and bearings for plant shutdowns,
                    preventive maintenance and service teams.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>MRO</span>
                  <span>Spare parts</span>
                  <span>Service team</span>
                </div>
              </div>

              {/* 4 Marine */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Marine</div>
                  <h3 className="font-semibold mb-2">Marine &amp; Offshore</h3>
                  <p className="text-sm text-slate-300">
                    Fuel, lube and air filtration for marine engines, generators
                    and deck equipment.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Marine engine</span>
                  <span>Generator</span>
                  <span>Harbour</span>
                </div>
              </div>

              {/* 5 Power */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Power</div>
                  <h3 className="font-semibold mb-2">Power &amp; Energy</h3>
                  <p className="text-sm text-slate-300">
                    Filters and bearings for gensets, compressors and power
                    plants where uptime is critical.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Genset</span>
                  <span>Compressor</span>
                  <span>Power plant</span>
                </div>
              </div>

              {/* 6 Fleet */}
              <div className="mrt-industry-card">
                <div>
                  <div className="mrt-industry-pill">Fleet</div>
                  <h3 className="font-semibold mb-2">Transport &amp; Fleet</h3>
                  <p className="text-sm text-slate-300">
                    Filters and bearings for trucks, buses and logistics fleets
                    to reduce downtime and operating cost.
                  </p>
                </div>
                <div className="mrt-industry-tags">
                  <span>Truck</span>
                  <span>Bus</span>
                  <span>Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="mrt-section mrt-section-alt">
          <div className="mrt-container">
            <p className="mrt-section-kicker">Why Us</p>
            <h2 className="mrt-section-title">
              Why factories choose MRT Supplier
            </h2>

            <div className="mrt-product-grid">
              {/* 1 */}
              <article className="mrt-card">
                <h3 className="mrt-card-title">Industrial Expertise</h3>
                <p className="mrt-card-text">
                  ประสบการณ์การทำงานกับโรงงานและงานบำรุงรักษาเครื่องจักร
                  เข้าใจปัญหาหน้างานจริง ช่วยเลือกสินค้าให้เหมาะกับไลน์การผลิตและเครื่องจักรของคุณ
                  ได้ง่ายขึ้น.
                </p>
              </article>

              {/* 2 */}
              <article className="mrt-card">
                <h3 className="mrt-card-title">Genuine Brand Products</h3>
                <p className="mrt-card-text">
                  จำหน่ายเฉพาะสินค้าของแท้จากแบรนด์ชั้นนำ NTN, Donaldson และ
                  MANN-FILTER มั่นใจได้ว่าชิ้นส่วนที่คุณใช้เป็นของแท้พร้อมเอกสารสเปกครบถ้วน.
                </p>
              </article>

              {/* 3 */}
              <article className="mrt-card">
                <h3 className="mrt-card-title">Fast Response &amp; Stock Support</h3>
                <p className="mrt-card-text">
                  เช็กสต๊อกและตอบกลับอย่างรวดเร็ว พร้อมแนะนำสเปกสินค้าทดแทน
                  เพื่อให้เครื่องหยุดงานน้อยที่สุด (ลด downtime).
                </p>
              </article>

              {/* 4 */}
              <article className="mrt-card">
                <h3 className="mrt-card-title">Technical Support</h3>
                <p className="mrt-card-text">
                  ให้คำแนะนำด้านเทคนิคเบื้องต้น เช่น การเลือกเกรดน้ำมัน,
                  อายุการใช้งานของไส้กรอง หรือการดูสภาพลูกปืน เพื่อช่วยยืดอายุอุปกรณ์.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mrt-section mrt-contact">
          <div className="mrt-container">
            <p className="mrt-section-kicker">Contact</p>
            <h2 className="mrt-section-title">Get a Quote or Ask Our Team</h2>

            <div className="mrt-contact-grid">
              <div>
                <p className="mrt-contact-label">Phone</p>
                <p>+66-XXX-XXX-XXX</p>
              </div>
              <div>
                <p className="mrt-contact-label">Email</p>
                <p>sales@mrtsupplier.com</p>
              </div>
              <div>
                <p className="mrt-contact-label">Line / Chat</p>
                <p>@mrtsupplier (Line OA หรือช่องทางที่ Tony ใช้จริง)</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mrt-footer">
        <div className="mrt-footer-inner">
          <span>© {new Date().getFullYear()} MRT Supplier Co., Ltd.</span>
          <span>Industrial Parts • Filters • Bearings</span>
        </div>
      </footer>
    </div>
  );
}
