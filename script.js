// DATA MOTOR DENGAN GAMBAR YANG PASTI BISA DIMUAT
const motors = [
    {
        id: 1,
        nama: "Ducati Panigale V4",
        merek: "Ducati v4",
        kategori: "Sport",
        tahun: 2023,
        km: "200.00 KM",
        dokumen: "STNK + BPKB Lengkap",
        status: "TERSEDIA",
        statusColor: "bg-emerald-600",
        hargaCash: 2000000000, 
        dpMurah: 6000000, 
        // URL Gambar Motor Merah (Sport/Ducati Look)
        gambar: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
        deskripsi: "Unit mulus siap pakai, mesin halus, surat-surat terjamin lengkap dan bergaransi resmi dealer."
    },
    {
        id: 2,
        nama: "Harley-Davidson", 
        merek: "yamaha",
        kategori: "matic",
        tahun: 2022,
        km: "14.200 km",
        dokumen: "STNK + BPKB Lengkap",
        status: "DP MURAH",
        statusColor: "bg-amber-500",
        hargaCash:123000000,
        dpMurah: 7000000, 
        // URL Gambar Motor Custom/Cruiser
        gambar: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
        deskripsi: "Fitur ABS berfungsi normal, ban tebal, kelistrikan lancar, servis rutin bengkel resmi."
    },
    {
        id: 3,
        nama: "KTM 790 Duke",
        merek: "sport motorcycle", 
        kategori: "sport", 
        tahun: 2021,
        km: "19.000 km",
        dokumen: "STNK + BPKB Lengkap",
        status: "TERSEDIA",
        statusColor: "bg-emerald-600",
        hargaCash: 142000000, 
        dpMurah: 5000000, 
        // URL Gambar Motor Naked/Street
        gambar: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800&auto=format&fit=crop",
        deskripsi: "Kondisi terawat, pajak hidup, siap tempur untuk harian maupun wirausaha."
    },
    {
        id: 4,
        nama: "Kawasaki Ninja 250 FI",
        merek: "kawasaki",
        kategori: "sport",
        tahun: 2020,
        km: "11.000 km",
        dokumen: "STNK + BPKB Lengkap",
        status: "TERSEDIA",
        statusColor: "bg-emerald-600",
        hargaCash: 125000000, 
        dpMurah: 5000000, 
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1f6AKzwfjiQaxB1CLjGn7ZgRmzOvFFgFCfNABDMYuQA&s=10",
        deskripsi: "Mesin 2 silinder halus, knalpot ori ada, plat lokal, surat lengkap."
    },
    {
        id :5,
        nama:"mio karbu",
        merek: "Honda",
        kategori: "matic",
        tahun: 2022,
        km: "14.200 km",
        dokumen: "STNK + BPKB Lengkap",
        status: "DP MURAH",
        statusColor: "bg-amber-500",
        hargaCash: 35000000,
        dpMurah: 3000000,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIo-qA4TNcMCBZmeZdcajgZHjw_m_fxEdO5maroqS3Jg&s=10",
        deskripsi: "Unit mulus siap pakai, mesin halus, surat-surat terjamin lengkap dan bergaransi resmi."
    },
    {
        id: 6,
        nama: "Nmax 2023",
        merek: "Yamaha",
        kategori: "Yamaha",
        tahun: 2023,
        km: "5.000 km",
        dokumen: "STNK + BPKB Lengkap",
        status: "TERSEDIA",
        statusColor: "bg-emerald-600",
        hargaCash: 40000000,
        dpMurah: 3000000,
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoUyu70PQfjZVtB91GJuJCrLENflMHkyVJ3fTGkpWWw&s=10",
        deskripsi: "Kondisi terawat, pajak hidup, siap tempur untuk harian maupun wirausaha."
    }
];

// FORMAT CURRENCY
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(angka);
}

// RENDER KATALOG MOTOR
function renderKatalog(data) {
    const grid = document.getElementById('motor-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fa-solid fa-motorcycle text-4xl text-gray-300 mb-2 block"></i>
                <p class="text-gray-500 font-medium text-sm">Motor tidak ditemukan dengan kriteria tersebut.</p>
            </div>
        `;
        return;
    }

    data.forEach(motor => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group";
        
        card.innerHTML = `
            <div>
                <!-- Foto Container & Badges -->
                <div class="relative overflow-hidden h-52 bg-gray-200">
                    <img src="${motor.gambar}" 
                         alt="${motor.nama}" 
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/600x400?text=Foto+Motor';" 
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    
                    <!-- Badge Kiri Atas (TERSEDIA / DP MURAH) -->
                    <span class="absolute top-3 left-3 ${motor.statusColor} text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full tracking-wider uppercase shadow-md">
                        ${motor.status}
                    </span>
                    
                    <!-- Badge Kanan Bawah (Kategori: MATIC / SPORT) -->
                    <span class="absolute bottom-3 right-3 bg-gray-900/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        ${motor.kategori}
                    </span>
                </div>

                <!-- Detail Motor -->
                <div class="p-5 pb-3">
                    <div class="flex justify-between items-center text-xs mb-1">
                        <span class="font-bold text-red-600 tracking-wider uppercase">${motor.merek}</span>
                        <span class="text-gray-400 font-medium"><i class="fa-regular fa-calendar mr-1"></i>${motor.tahun}</span>
                    </div>

                    <h3 class="text-lg font-bold text-gray-900 mb-2 leading-snug">${motor.nama}</h3>

                    <!-- KM & Dokumen -->
                    <div class="flex items-center gap-2 text-xs text-gray-500 mb-4">
                        <span><i class="fa-solid fa-gauge-high mr-1 text-gray-400"></i>${motor.km}</span>
                        <span>•</span>
                        <span class="text-emerald-600 font-semibold"><i class="fa-solid fa-circle-check mr-1"></i>${motor.dokumen}</span>
                    </div>

                    <!-- Box Harga Cash & DP -->
                    <div class="bg-gray-50/80 p-3.5 rounded-xl border border-gray-100">
                        <span class="text-[11px] text-gray-400 font-medium block leading-none mb-1">Harga Cash</span>
                        <span class="text-xl font-extrabold text-gray-900 block leading-tight">${formatRupiah(motor.hargaCash)}</span>
                        <span class="text-xs text-amber-600 font-semibold block mt-1">
                            DP Murah mulai: <strong class="font-bold">${formatRupiah(motor.dpMurah)}</strong>
                        </span>
                    </div>
                </div>
            </div>

            <!-- Tombol Aksi -->
            <div class="p-5 pt-0">
                <button onclick="openModal(${motor.id})" class="w-full mt-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-xl text-xs transition text-center shadow-sm">
                    Lihat Detail & Beli
                </button>
            </div>
        `;

        grid.appendChild(card);
    });
}

// LOGIKA FILTER & SORTING
function applyFilters() {
    const searchElem = document.getElementById('filter-search');
    const merekElem = document.getElementById('filter-merek');
    const kategoriElem = document.getElementById('filter-kategori');
    const urutkanElem = document.getElementById('filter-urutkan');

    if (!searchElem || !merekElem || !kategoriElem || !urutkanElem) return;

    const searchVal = searchElem.value.toLowerCase();
    const merekVal = merekElem.value;
    const kategoriVal = kategoriElem.value;
    const urutkanVal = urutkanElem.value;

    let result = motors.filter(m => {
        const matchSearch = m.nama.toLowerCase().includes(searchVal);
        const matchMerek = merekVal === 'all' || m.merek === merekVal;
        const matchKategori = kategoriVal === 'all' || m.kategori === kategoriVal;
        return matchSearch && matchMerek && matchKategori;
    });

    if (urutkanVal === 'termurah') {
        result.sort((a, b) => a.hargaCash - b.hargaCash);
    } else if (urutkanVal === 'termahal') {
        result.sort((a, b) => b.hargaCash - a.hargaCash);
    }

    renderKatalog(result);
}

// MODAL DETAIL LOGIC
function openModal(id) {
    const motor = motors.find(m => m.id === id);
    if (!motor) return;

    const modalContent = document.getElementById('modal-content');
    if (modalContent) {
        modalContent.innerHTML = `
            <img src="${motor.gambar}" alt="${motor.nama}" class="w-full h-56 object-cover rounded-2xl mb-4">
            <span class="text-xs font-bold text-red-600 uppercase tracking-wider">${motor.merek} • ${motor.tahun}</span>
            <h3 class="text-xl font-extrabold text-gray-900 mt-0.5 mb-2">${motor.nama}</h3>
            <p class="text-2xl font-black text-gray-900 mb-3">${formatRupiah(motor.hargaCash)}</p>
            <p class="text-xs text-gray-500 mb-4 leading-relaxed">${motor.deskripsi}</p>
            <a href="https://wa.me/6281234567890?text=Halo%20saya%20berminat%20dengan%20${encodeURIComponent(motor.nama)}" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl text-xs text-center transition flex items-center justify-center gap-2">
                <i class="fa-brands fa-whatsapp text-base"></i> Hubungi Sales via WhatsApp
            </a>
        `;
    }

    const modalDetail = document.getElementById('modal-detail');
    if (modalDetail) modalDetail.classList.remove('hidden');
}

// SIMULASI KREDIT LOGIC
function initSimulasi() {
    const selectMotor = document.getElementById('sim-motor');
    if (!selectMotor) return;

    selectMotor.innerHTML = '';
    motors.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.id;
        opt.textContent = `${m.nama} - ${formatRupiah(m.hargaCash)}`;
        selectMotor.appendChild(opt);
    });

    const dpInput = document.getElementById('sim-dp');
    if (motors.length > 0 && dpInput) {
        dpInput.value = motors[0].dpMurah;
    }

    hitungSimulasi();
}

function hitungSimulasi() {
    const selectMotor = document.getElementById('sim-motor');
    const dpInput = document.getElementById('sim-dp');
    const tenorSelect = document.getElementById('sim-tenor');

    if (!selectMotor || !dpInput || !tenorSelect) return;

    const selectedId = parseInt(selectMotor.value);
    const motor = motors.find(m => m.id === selectedId);
    if (!motor) return;

    const dpVal = parseFloat(dpInput.value) || 0;
    const tenor = parseInt(tenorSelect.value);

    const bungaBulan = 0.018; 
    const pokokPinjaman = motor.hargaCash - dpVal;

    if (pokokPinjaman <= 0) {
        alert("Nominal DP tidak boleh melebihi atau sama dengan Harga Motor!");
        return;
    }

    const totalBunga = pokokPinjaman * bungaBulan * tenor;
    const totalHutang = pokokPinjaman + totalBunga;
    const angsuranBulan = Math.round(totalHutang / tenor);

    const resNama = document.getElementById('res-nama-motor');
    const resHarga = document.getElementById('res-harga');
    const resPinjaman = document.getElementById('res-pinjaman');
    const resAngsuran = document.getElementById('res-angsuran');
    const btnAju = document.getElementById('btn-aju-kredit');

    if (resNama) resNama.textContent = motor.nama;
    if (resHarga) resHarga.textContent = formatRupiah(motor.hargaCash);
    if (resPinjaman) resPinjaman.textContent = formatRupiah(pokokPinjaman);
    if (resAngsuran) resAngsuran.textContent = `${formatRupiah(angsuranBulan)} / bln`;

    const waText = `Halo Maju Motor Jaya, saya ingin mengajukan kredit:\n- Motor: ${motor.nama}\n- Uang Muka (DP): ${formatRupiah(dpVal)}\n- Tenor: ${tenor} Bulan\n- Est. Angsuran: ${formatRupiah(angsuranBulan)}/bln`;
    
    if (btnAju) {
        btnAju.href = `https://wa.me/6281234567890?text=${encodeURIComponent(waText)}`;
    }
}

// INITIALIZE APP & EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    renderKatalog(motors);
    initSimulasi();

    document.getElementById('filter-search')?.addEventListener('input', applyFilters);
    document.getElementById('filter-merek')?.addEventListener('change', applyFilters);
    document.getElementById('filter-kategori')?.addEventListener('change', applyFilters);
    document.getElementById('filter-urutkan')?.addEventListener('change', applyFilters);

    document.getElementById('btn-close-modal')?.addEventListener('click', () => {
        document.getElementById('modal-detail')?.classList.add('hidden');
    });

    document.getElementById('sim-motor')?.addEventListener('change', () => {
        const selectedId = parseInt(document.getElementById('sim-motor').value);
        const motor = motors.find(m => m.id === selectedId);
        if (motor) {
            document.getElementById('sim-dp').value = motor.dpMurah;
        }
        hitungSimulasi();
    });

    document.getElementById('btn-hitung')?.addEventListener('click', hitungSimulasi);

    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
        document.getElementById('mobile-menu')?.classList.toggle('hidden');
    });
});