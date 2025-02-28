<?php
/**
 * NdrRequestDataTest
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
use SpApi\Model\shipping\v2\NdrRequestData;

/**
 * NdrRequestDataTest Class Doc Comment
 *
 * @category    Class
 * @description Additional information required for the NDR action that has been filed. If the NDR Action is RESCHEDULE, rescheduleDate is a required field. Otherwise, if the NDR Action is REATTEMPT, additionalAddressNotes is a required field.
 * @package     SpApi
 */
class NdrRequestDataTest extends TestCase
{

    private NdrRequestData $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new NdrRequestData();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "NdrRequestData"
     */
    public function testNdrRequestData()
    {
        $this->assertInstanceOf(NdrRequestData::class, $this->model);
    }

    /**
     * Test attribute "reschedule_date"
     */
    public function testPropertyRescheduleDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setRescheduleDate($testValue);
        $this->assertEquals($testValue, $this->model->getRescheduleDate());
    }

    /**
     * Test attribute "additional_address_notes"
     */
    public function testPropertyAdditionalAddressNotes()
    {
        $testValue = 'test';
        
        $this->model->setAdditionalAddressNotes($testValue);
        $this->assertEquals($testValue, $this->model->getAdditionalAddressNotes());
    }
}
