<?php
/**
 * SellingPartnerMetadataTest
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
use SpApi\Model\finances\v2024_06_19\SellingPartnerMetadata;

/**
 * SellingPartnerMetadataTest Class Doc Comment
 *
 * @category    Class
 * @description Metadata describing the seller.
 * @package     SpApi
 */
class SellingPartnerMetadataTest extends TestCase
{

    private SellingPartnerMetadata $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SellingPartnerMetadata();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SellingPartnerMetadata"
     */
    public function testSellingPartnerMetadata()
    {
        $this->assertInstanceOf(SellingPartnerMetadata::class, $this->model);
    }

    /**
     * Test attribute "selling_partner_id"
     */
    public function testPropertySellingPartnerId()
    {
        $testValue = 'test';
        
        $this->model->setSellingPartnerId($testValue);
        $this->assertEquals($testValue, $this->model->getSellingPartnerId());
    }

    /**
     * Test attribute "account_type"
     */
    public function testPropertyAccountType()
    {
        $testValue = 'test';
        
        $this->model->setAccountType($testValue);
        $this->assertEquals($testValue, $this->model->getAccountType());
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }
}
