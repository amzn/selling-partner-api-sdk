<?php
/**
 * GetShipmentDocumentsResultTest
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
use SpApi\Model\shipping\v2\GetShipmentDocumentsResult;

/**
 * GetShipmentDocumentsResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the getShipmentDocuments operation.
 * @package     SpApi
 */
class GetShipmentDocumentsResultTest extends TestCase
{

    private GetShipmentDocumentsResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetShipmentDocumentsResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetShipmentDocumentsResult"
     */
    public function testGetShipmentDocumentsResult()
    {
        $this->assertInstanceOf(GetShipmentDocumentsResult::class, $this->model);
    }

    /**
     * Test attribute "shipment_id"
     */
    public function testPropertyShipmentId()
    {
        $testValue = 'test';
        
        $this->model->setShipmentId($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentId());
    }

    /**
     * Test attribute "package_document_detail"
     */
    public function testPropertyPackageDocumentDetail()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\PackageDocumentDetail();
        
        $this->model->setPackageDocumentDetail($testValue);
        $this->assertEquals($testValue, $this->model->getPackageDocumentDetail());
    }

    /**
     * Test attribute "benefits"
     */
    public function testPropertyBenefits()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Benefits();
        
        $this->model->setBenefits($testValue);
        $this->assertEquals($testValue, $this->model->getBenefits());
    }
}
