<?php

use Illuminate\Database\Seeder;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Admin::create([
        	'email' => 'contact@email.com.br',
            'name' => 'Usuário Teste',
            'password' => bcrypt('userpw')
        ]);
    }
}
