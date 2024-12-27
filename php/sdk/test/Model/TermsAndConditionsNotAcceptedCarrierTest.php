<?php
/**
 * TermsAndConditionsNotAcceptedCarrierTest
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
use OpenAPI\Client\Model\merchantfulfillment\TermsAndConditionsNotAcceptedCarrier;

/**
 * TermsAndConditionsNotAcceptedCarrierTest Class Doc Comment
 *
 * @category    Class
 * @description A carrier whose terms and conditions have not been accepted by the seller.
 * @package     OpenAPI\Client
 */
class TermsAndConditionsNotAcceptedCarrierTest extends TestCase
{

    private TermsAndConditionsNotAcceptedCarrier $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TermsAndConditionsNotAcceptedCarrier();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TermsAndConditionsNotAcceptedCarrier"
     */
    public function testTermsAndConditionsNotAcceptedCarrier()
    {
        $this->assertInstanceOf(TermsAndConditionsNotAcceptedCarrier::class, $this->model);
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
}
