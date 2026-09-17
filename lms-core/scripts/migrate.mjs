#!/usr/bin/env node
import { readdir,readFile } from 'node:fs/promises';
import { neon } from '@neondatabase/serverless';
const url=process.env.DATABASE_URL;if(!url){console.error('DATABASE_URL not set');process.exit(1)}
const sql=neon(url);const files=(await readdir('db')).filter(f=>f.endsWith('.sql')).sort();
for(const f of files){const text=await readFile(`db/${f}`,'utf8');const statements=text.split(/;\s*$/m).map(s=>s.replace(/^\s*--.*$/gm,'').trim()).filter(Boolean);console.log(`\n▸ ${f} (${statements.length} statements)`);for(const stmt of statements){try{await sql.query(stmt);console.log(' ✓')}catch(e){console.log(` ✗ ${e.message}`)}}}console.log('\nMigrations complete.');
