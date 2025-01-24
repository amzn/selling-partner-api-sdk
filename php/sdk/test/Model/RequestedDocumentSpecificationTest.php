<?php
/**
 * RequestedDocumentSpecificationTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\shipping\RequestedDocumentSpecification;

/**
 * RequestedDocumentSpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description The document specifications requested. For calls to the purchaseShipment operation, the shipment purchase fails if the specified document specifications are not among those returned in the response to the getRates operation.
 * @package     OpenAPI\Client
 */
class RequestedDocumentSpecificationTest extends TestCase
{

    private RequestedDocumentSpecification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RequestedDocumentSpecification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RequestedDocumentSpecification"
     */
    public function testRequestedDocumentSpecification()
    {
        $this->assertInstanceOf(RequestedDocumentSpecification::class, $this->model);
    }

    /**
     * Test attribute "format"
     */
    public function testPropertyFormat()
    {
        $enumInstance = new \OpenAPI\Client\Model\shipping\DocumentFormat();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFormat($testValue);
        $this->assertEquals($testValue, $this->model->getFormat());
    }

    /**
     * Test attribute "size"
     */
    public function testPropertySize()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\DocumentSize();
        
        $this->model->setSize($testValue);
        $this->assertEquals($testValue, $this->model->getSize());
    }

    /**
     * Test attribute "dpi"
     */
    public function testPropertyDpi()
    {
        $testValue = 123;
        
        $this->model->setDpi($testValue);
        $this->assertEquals($testValue, $this->model->getDpi());
    }

    /**
     * Test attribute "page_layout"
     */
    public function testPropertyPageLayout()
    {
        $testValue = 'test';
        
        $this->model->setPageLayout($testValue);
        $this->assertEquals($testValue, $this->model->getPageLayout());
    }

    /**
     * Test attribute "need_file_joining"
     */
    public function testPropertyNeedFileJoining()
    {
        $testValue = true;
        
        $this->model->setNeedFileJoining($testValue);
        $this->assertEquals($testValue, $this->model->getNeedFileJoining());
    }

    /**
     * Test attribute "requested_document_types"
     */
    public function testPropertyRequestedDocumentTypes()
    {
        $testValue = [];
        
        $this->model->setRequestedDocumentTypes($testValue);
        $this->assertEquals($testValue, $this->model->getRequestedDocumentTypes());
    }
}
