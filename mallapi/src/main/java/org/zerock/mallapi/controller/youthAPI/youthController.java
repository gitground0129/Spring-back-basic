package org.zerock.mallapi.controller.youthAPI;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.xml.sax.InputSource;

@RestController
@RequestMapping("/api/youth")
@CrossOrigin(origins = "http://localhost:3000")
public class youthController {

    @GetMapping("/data")
    public List<Map<String, String>> getData(
            @RequestParam String openApiVlak,
            @RequestParam int display,
            @RequestParam int pageIndex,
            @RequestParam(required = false) String srchPolicyId,
            @RequestParam(required = false) String query,
            @RequestParam(required = false) String bizTycdSel,
            @RequestParam(required = false) String srchPolyBizSecd,
            @RequestParam(required = false) String keyword) {

        String url = "https://www.youthcenter.go.kr/opi/youthPlcyList.do?openApiVlak=" + openApiVlak
                + "&display=" + display + "&pageIndex=" + pageIndex;

        if (srchPolicyId != null) url += "&srchPolicyId=" + srchPolicyId;
        if (query != null) url += "&query=" + query;
        if (bizTycdSel != null) url += "&bizTycdSel=" + bizTycdSel;
        if (srchPolyBizSecd != null) url += "&srchPolyBizSecd=" + srchPolyBizSecd;
        if (keyword != null) url += "&keyword=" + keyword;

        RestTemplate restTemplate = new RestTemplate(new HttpComponentsClientHttpRequestFactory());
        String xmlResponse = restTemplate.getForObject(url, String.class);

        // XML 파싱 및 Map으로 변환
        List<Map<String, String>> policies = new ArrayList<>();
        try {
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document document = builder.parse(new InputSource(new StringReader(xmlResponse)));

            NodeList policyNodes = document.getElementsByTagName("youthPolicy");
            for (int i = 0; i < policyNodes.getLength(); i++) {
                Element policyElement = (Element) policyNodes.item(i);

                Map<String, String> policyData = new HashMap<>();
                policyData.put("bizId", policyElement.getElementsByTagName("bizId").item(0).getTextContent());
                policyData.put("polyBizTy", policyElement.getElementsByTagName("polyBizTy").item(0).getTextContent());
                policyData.put("polyBizSjnm", policyElement.getElementsByTagName("polyBizSjnm").item(0).getTextContent());
                policyData.put("polyItcnCn", policyElement.getElementsByTagName("polyItcnCn").item(0).getTextContent());
                policyData.put("rqutPrdCn", policyElement.getElementsByTagName("rqutPrdCn").item(0).getTextContent());

                policies.add(policyData); // 각 정책 정보를 리스트에 추가
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return policies; // JSON으로 자동 변환되어 반환
    }
}


