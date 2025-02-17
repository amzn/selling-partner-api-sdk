<?php
/**
 * CollectionFormsHistoryRecordTest
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
use SpApi\Model\shipping\v2\CollectionFormsHistoryRecord;

/**
 * CollectionFormsHistoryRecordTest Class Doc Comment
 *
 * @category    Class
 * @description Active Account Details
 * @package     SpApi
 */
class CollectionFormsHistoryRecordTest extends TestCase
{

    private CollectionFormsHistoryRecord $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CollectionFormsHistoryRecord();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CollectionFormsHistoryRecord"
     */
    public function testCollectionFormsHistoryRecord()
    {
        $this->assertInstanceOf(CollectionFormsHistoryRecord::class, $this->model);
    }

    /**
     * Test attribute "carrier_name"
     */
    public function testPropertyCarrierName()
    {
        $testValue = 'test';
        
        $this->model->setCarrierName($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierName());
    }

    /**
     * Test attribute "creation_date"
     */
    public function testPropertyCreationDate()
    {
        $testValue = 'test';
        
        $this->model->setCreationDate($testValue);
        $this->assertEquals($testValue, $this->model->getCreationDate());
    }

    /**
     * Test attribute "generation_status"
     */
    public function testPropertyGenerationStatus()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\GenerationStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setGenerationStatus($testValue);
        $this->assertEquals($testValue, $this->model->getGenerationStatus());
    }

    /**
     * Test attribute "collection_form_id"
     */
    public function testPropertyCollectionFormId()
    {
        $testValue = 'test';
        
        $this->model->setCollectionFormId($testValue);
        $this->assertEquals($testValue, $this->model->getCollectionFormId());
    }

    /**
     * Test attribute "ship_from_address"
     */
    public function testPropertyShipFromAddress()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Address();
        
        $this->model->setShipFromAddress($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromAddress());
    }
}
