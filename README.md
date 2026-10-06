# Sitio personal

Sitio estático bilingüe (inicio, servicios, perfil, académico). Se despliega por FTP a mi hosting con GitHub Actions al hacer push a esta rama.

Secretos requeridos en Settings → Secrets → Actions: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` y, opcional, `FTP_DIR` (por defecto `./`).
