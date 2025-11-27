const pool = require('../config/db.js')

class Course {
  static async findAll() {
   
    const sql = `
    SELECT 
        course.id_course,
        course.nama_course, 
        tutor.nama_tutor, 
        kategori.nama_kategori,
        course.harga
    FROM 
        course
    JOIN 
        tutor ON course.id_tutor = tutor.id_tutor
    JOIN 
        kategori ON course.id_kategori = kategori.id_kategori
`
const [rows] = await pool.query(sql);
return rows;
  }

  static async findById(id) {

    const sql = `
    SELECT 
        course.nama_course, 
        course.deskripsi, 
        course.harga,
        tutor.nama_tutor, 
        kategori.nama_kategori
    FROM 
        course
    JOIN 
        tutor ON course.id_tutor = tutor.id_tutor
    JOIN 
        kategori ON course.id_kategori = kategori.id_kategori
    WHERE 
        course.id_course = ?
`
const [rows] = await pool.query(sql, [id]);
return rows[0];
  }

  static async create(newCourseData) {
   const { 
    nama_course, 
    deskripsi, 
    harga, 
    durasi_total, 
    id_tutor, 
    id_kategori } = newCourseData

    const sql = `
        INSERT INTO course (
            nama_course, deskripsi, harga, durasi_total, id_tutor, id_kategori
        ) VALUES (?, ?, ?, ?, ?, ?)
    `

    const [result] = await pool.query(sql, [
        nama_course, 
        deskripsi, 
        harga, 
        durasi_total, 
        id_tutor, 
        id_kategori
    ])

    return result
}

static async updateById(id, courseData) {

  const { 
    nama_course, 
    deskripsi, 
    harga, 
    durasi_total, 
    id_tutor, 
    id_kategori } = courseData

    const sql = `
        UPDATE course 
        SET 
            nama_course = ?, 
            deskripsi = ?, 
            harga = ?, 
            durasi_total = ?, 
            id_tutor = ?, 
            id_kategori = ? 
        WHERE id_course = ?
    `

    const [result] = await pool.query(sql, [
        nama_course, 
        deskripsi, 
        harga, 
        durasi_total, 
        id_tutor, 
        id_kategori, 
        id
    ])

    return result
}

static async deleteById(id){

  const sql = "DELETE FROM course WHERE id_course = ?"
  
   const [result] = await pool.query(sql, [id])
   
   return result
  }

}


module.exports = Course