<?php
/**
 * VerificationDetailsTest
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
use SpApi\Model\orders\v0\VerificationDetails;

/**
 * VerificationDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Additional information related to the verification of a regulated order.
 * @package     SpApi
 */
class VerificationDetailsTest extends TestCase
{

    private VerificationDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new VerificationDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "VerificationDetails"
     */
    public function testVerificationDetails()
    {
        $this->assertInstanceOf(VerificationDetails::class, $this->model);
    }

    /**
     * Test attribute "prescription_detail"
     */
    public function testPropertyPrescriptionDetail()
    {
        
        $testValue = new \SpApi\Model\orders\v0\PrescriptionDetail();
        
        $this->model->setPrescriptionDetail($testValue);
        $this->assertEquals($testValue, $this->model->getPrescriptionDetail());
    }
}
