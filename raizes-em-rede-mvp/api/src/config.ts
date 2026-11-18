import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Sempre carrega api/.env, independentemente da pasta onde o npm foi executado.
const apiDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
dotenv.config({ path: path.join(apiDir, '.env') });
