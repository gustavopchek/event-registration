<?php

use Illuminate\Database\Seeder;

class StatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('statuses')->insert([
            'name' => 'Confirmada',
            'code' => 'confirmed',
            'description' => 'A inscrição foi confirmada, sua vaga está garantida.',
        ]);
        DB::table('statuses')->insert([
            'name' => 'Pendente',
            'code' => 'pending',
            'description' => 'A inscrição está aguardando pagamento ou confirmação.',
        ]);
        DB::table('statuses')->insert([
            'name' => 'Cancelada',
            'code' => 'cancelled',
            'description' => 'A inscrição foi cancelada.',
        ]);
        DB::table('statuses')->insert([
            'name' => 'Suspensa',
            'code' => 'suspended',
            'description' => 'A inscrição foi suspensa. Entre em contato com o administrador.',
        ]);
    }
}
