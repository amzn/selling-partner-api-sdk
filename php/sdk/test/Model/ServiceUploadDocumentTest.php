<?php
/**
 * ServiceUploadDocumentTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\services\ServiceUploadDocument;

/**
 * ServiceUploadDocumentTest Class Doc Comment
 *
 * @category    Class
 * @description Input for to be uploaded document.
 * @package     OpenAPI\Client
 */
class ServiceUploadDocumentTest extends TestCase
{

    private ServiceUploadDocument $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ServiceUploadDocument();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ServiceUploadDocument"
     */
    public function testServiceUploadDocument()
    {
        $this->assertInstanceOf(ServiceUploadDocument::class, $this->model);
    }

    /**
     * Test attribute "content_type"
     */
    public function testPropertyContentType()
    {
        $enumInstance = new ServiceUploadDocument();
        $allowedValues = $enumInstance->getContentTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setContentType($testValue);
        $this->assertEquals($testValue, $this->model->getContentType());
    }

    /**
     * Test attribute "content_length"
     */
    public function testPropertyContentLength()
    {
        $testValue = 1;
        
        $this->model->setContentLength($testValue);
        $this->assertEquals($testValue, $this->model->getContentLength());
    }

    /**
     * Test attribute "content_md5"
     */
    public function testPropertyContentMd5()
    {
        $testValue = 'test';
        
        $this->model->setContentMd5($testValue);
        $this->assertEquals($testValue, $this->model->getContentMd5());
    }
}
