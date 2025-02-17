<?php
/**
 * PrescriptionDetailTest
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
use SpApi\Model\orders\v0\PrescriptionDetail;

/**
 * PrescriptionDetailTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the prescription that is used to verify a regulated product. This must be provided once per order and reflect the seller’s own records. Only approved orders can have prescriptions.
 * @package     SpApi
 */
class PrescriptionDetailTest extends TestCase
{

    private PrescriptionDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrescriptionDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrescriptionDetail"
     */
    public function testPrescriptionDetail()
    {
        $this->assertInstanceOf(PrescriptionDetail::class, $this->model);
    }

    /**
     * Test attribute "prescription_id"
     */
    public function testPropertyPrescriptionId()
    {
        $testValue = 'test';
        
        $this->model->setPrescriptionId($testValue);
        $this->assertEquals($testValue, $this->model->getPrescriptionId());
    }

    /**
     * Test attribute "expiration_date"
     */
    public function testPropertyExpirationDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setExpirationDate($testValue);
        $this->assertEquals($testValue, $this->model->getExpirationDate());
    }

    /**
     * Test attribute "written_quantity"
     */
    public function testPropertyWrittenQuantity()
    {
        $testValue = 123;
        
        $this->model->setWrittenQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getWrittenQuantity());
    }

    /**
     * Test attribute "total_refills_authorized"
     */
    public function testPropertyTotalRefillsAuthorized()
    {
        $testValue = 123;
        
        $this->model->setTotalRefillsAuthorized($testValue);
        $this->assertEquals($testValue, $this->model->getTotalRefillsAuthorized());
    }

    /**
     * Test attribute "refills_remaining"
     */
    public function testPropertyRefillsRemaining()
    {
        $testValue = 123;
        
        $this->model->setRefillsRemaining($testValue);
        $this->assertEquals($testValue, $this->model->getRefillsRemaining());
    }

    /**
     * Test attribute "clinic_id"
     */
    public function testPropertyClinicId()
    {
        $testValue = 'test';
        
        $this->model->setClinicId($testValue);
        $this->assertEquals($testValue, $this->model->getClinicId());
    }

    /**
     * Test attribute "usage_instructions"
     */
    public function testPropertyUsageInstructions()
    {
        $testValue = 'test';
        
        $this->model->setUsageInstructions($testValue);
        $this->assertEquals($testValue, $this->model->getUsageInstructions());
    }
}
