<?php
/**
 * VerificationDetailsTest
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
use OpenAPI\Client\Model\orders\VerificationDetails;

/**
 * VerificationDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Additional information related to the verification of a regulated order.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\orders\PrescriptionDetail();
        
        $this->model->setPrescriptionDetail($testValue);
        $this->assertEquals($testValue, $this->model->getPrescriptionDetail());
    }
}
