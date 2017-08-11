package com.stylefeng.guns.core.util;

import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Created by Allan on 2017/7/19.
 * json数据的工具类
 */
public class JsonUtil {
    public static String mapToString(Map map){
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append("{");
        int i = 0;
        for(Object key:map.keySet()){
            if(i++!=0)stringBuffer.append(",");
            stringBuffer.append("\""+key.toString()+"\"");
            stringBuffer.append(":");
            String temp = ((String[])map.get(key))[0];
            if(temp==null|temp.equals(""))temp="";
            stringBuffer.append("\""+temp+"\"");
        }
        stringBuffer.append("}");
        return stringBuffer.toString();
    }

    public static HttpPost postForm(String url, Map<String, String> params){
    HttpPost httpost = new HttpPost(url);
    List<org.apache.http.NameValuePair> nvps = new ArrayList<org.apache.http.NameValuePair>();

    Set<String> keySet = params.keySet();
    for(String key : keySet) {
        nvps.add(new BasicNameValuePair(key, params.get(key)));
    }

    try {

        httpost.setEntity(new UrlEncodedFormEntity(nvps, HTTP.UTF_8));
    } catch (UnsupportedEncodingException e) {
        e.printStackTrace();
    }

    return httpost;
}
}
