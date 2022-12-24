package com.frontend;

import android.content.Context;
import android.content.SharedPreferences;
import android.view.View;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class NativeUI extends AppCompatActivity {

    public Button btn1,btn2,btn3,btn4,btn5;

    SharedPreferences sh = getSharedPreferences("Product", Context.MODE_PRIVATE);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_native_ui);
        btn1 = findViewById(R.id.button1);
        btn2 = findViewById(R.id.button2);
        btn3 = findViewById(R.id.button3);
        btn4 = findViewById(R.id.button4);

        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(NativeUI.this, glassAR.class);
                //intent.putExtra("username", userid);
                startActivity(intent);
            }
        });

        btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(NativeUI.this, displayAR.class);
                intent.putExtra("product", "apple");
                startActivity(intent);
            }
        });

        btn3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(NativeUI.this, displayAR.class);
                intent.putExtra("product", "mouse");
                startActivity(intent);
            }
        });

        btn4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(NativeUI.this, displayAR.class);
                intent.putExtra("product", "personal_computer");
                startActivity(intent);
            }
        });

    }
}
