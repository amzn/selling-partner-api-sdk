<?php
/**
 * GetDocumentResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\datakiosk\v2023_11_15\GetDocumentResponse;

/**
 * GetDocumentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response for the &#x60;getDocument&#x60; operation.
 * @package     SpApi
 */
class GetDocumentResponseTest extends TestCase
{

    private GetDocumentResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetDocumentResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetDocumentResponse"
     */
    public function testGetDocumentResponse()
    {
        $this->assertInstanceOf(GetDocumentResponse::class, $this->model);
    }

    /**
     * Test attribute "document_id"
     */
    public function testPropertyDocumentId()
    {
        $testValue = 'test';
        
        $this->model->setDocumentId($testValue);
        $this->assertEquals($testValue, $this->model->getDocumentId());
    }

    /**
     * Test attribute "document_url"
     */
    public function testPropertyDocumentUrl()
    {
        $testValue = 'test';
        
        $this->model->setDocumentUrl($testValue);
        $this->assertEquals($testValue, $this->model->getDocumentUrl());
    }
}
